import React, { useEffect, useState } from 'react'

const useNewUser = (): readonly [boolean, (state: boolean) => void] => {
  // const isNewUser = localStorage.getItem()
  const [isNewUser, setNewUser] = useState<boolean>(false)

  useEffect(() => {
    if (typeof window !== undefined) {
      const isNewUser = localStorage.getItem('isNewUser')
      if (isNewUser === null) {
        setNewUser(true)
      } else {
        setNewUser(JSON.parse(isNewUser))
      }
    }
  }, [])

  return [
    isNewUser,
    (state: boolean) => {
      localStorage.setItem('isNewUser', JSON.stringify(state))
      setNewUser(state)
    },
  ] as const
}

export default useNewUser
