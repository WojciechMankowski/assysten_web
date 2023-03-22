import React from 'react'
import User from '../user'
interface LoginProps{
    setUser: React.Dispatch<React.SetStateAction<User>>
    user: User
}

export default  LoginProps