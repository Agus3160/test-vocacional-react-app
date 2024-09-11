import { createContext, useState } from "react";
import { UserContextType, UserTestSession } from "../lib/definitions";


export const UserContext = createContext<UserContextType|null>(null)

export function UserContextProvider({children}:{children: JSX.Element}) {

  const [user, setUser] = useState<UserTestSession|null>(null)

  const getToken = () => {
    return "";
  }

  return (
    <UserContext.Provider value={{user, setUser, getToken}}>
      {children}
    </UserContext.Provider>
  )

}

