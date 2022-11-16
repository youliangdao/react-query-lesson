import axios from 'axios'
import { useEffect, useState } from 'react'
import { useStateContext } from '../context/StateProvider'
import { Task } from '../types/types'
import { TASKS_ENDPOINT } from '../urls'

export const useClassicalFetch = () => {
  const { tasks, setTasks } = useStateContext()
  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState(false)

  useEffect(() => {
    const fetchTasks = async () => {
      setError(false)
      setLoading(true)
      try {
        const result = await axios.get<Task[]>(TASKS_ENDPOINT)
        setTasks(result.data)
      } catch (error) {
        setError(true)
      }
      setLoading(false)
    }
    fetchTasks()
  }, [setTasks])

  return {
    tasks,
    isLoading,
    isError,
  }
}
