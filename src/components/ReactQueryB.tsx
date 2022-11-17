import { ChevronDoubleRightIcon } from '@heroicons/react/solid'
import { useQueryClient } from '@tanstack/react-query'
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Task } from '../types/types'

const ReactQueryB: FC = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const data = queryClient.getQueryData<Task[]>(['tasks'])
  console.log('rendered ReactQueryB')

  return (
    <div className="flex justify-center items-center flex-col">
      <p className="text-center font-bold mb-3">ReactQueryB</p>
      {data?.map((task) => (
        <p key={task.id}>{task.title}</p>
      ))}
      <ChevronDoubleRightIcon
        onClick={() => navigate('/')}
        className="h-5 w-5 mt-2 text-blue-500 cursor-pointer"
      />
      <p className="text-sm">react query A</p>
    </div>
  )
}

export default ReactQueryB
