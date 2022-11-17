import React, {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react'
import { Task } from '../types/types'

type Props = {
  children: ReactNode
}
type StateContextType = {
  tasks: Task[] | null
  dark: boolean
  setTasks: Dispatch<SetStateAction<Task[] | null>>
  setDark: Dispatch<SetStateAction<boolean>>
}

const StateContext = createContext<StateContextType>({} as StateContextType)

const StateProvider: FC<Props> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[] | null>(null)
  const [dark, setDark] = useState(false)
  return (
    <StateContext.Provider value={{ tasks, dark, setTasks, setDark }}>
      {children}
    </StateContext.Provider>
  )
}

export default StateProvider
export const useStateContext = (): StateContextType => useContext(StateContext)
