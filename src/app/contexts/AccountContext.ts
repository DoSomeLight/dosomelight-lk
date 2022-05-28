import { createContext } from 'react'
import { get_COOKIE_DATA } from 'app/MODES'

export const AccountContext = createContext(get_COOKIE_DATA())
