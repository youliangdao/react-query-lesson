import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Task } from '../types/types'
import { TASKS_ENDPOINT } from '../urls'
const fetchTasks = async () => {
  const result = await axios.get<Task[]>(TASKS_ENDPOINT)
  return result.data
}

export const useQueryTasks = () => {
  return useQuery<Task[], Error>({
    queryKey: ['tasks'],
    queryFn: fetchTasks,
    cacheTime: 10000,
    staleTime: 10000,
  })
}
