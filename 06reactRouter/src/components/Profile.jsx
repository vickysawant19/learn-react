import React from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {
    const {userID } = useParams()
  return (
    <div className='bg-stone-200 h-screen text-center'>Profile:{userID} </div>
  )
}

export default Profile