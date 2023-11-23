import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {
    const {userID } = useParams()

    const [data , setData] = useState([])

    useEffect(() => {
      fetch(`https://api.github.com/users/${userID}`)
      .then((res) => res.json())
      .then((data) => setData(data))
    },[])

    
    






  return (
    <div className='bg-stone-200 text-center min-h-screen flex items-center justify-center '>
      <div className='bg-white p-4 rounded-xl shadow-lg mb-64'>
        <div className='font-light text-lg'>
        Git Profile : {userID}

        </div>
           
        <img 
        className='bg-gray-700 w-20 h-20 mx-auto rounded-full'
        src={data.avatar_url
        } alt=""  />
        <div className='text-2xl text-center p-2 font-semibold '>{data.name}</div>
        <div className='w-96 p-4'>{data.bio}</div>


      </div>
    
    
    
    </div>

  )
}

export default Profile