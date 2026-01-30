import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Detail() {
    const {userId} = useParams()
    const [user, setUser] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        axios.get('/data.json')
            .then((response) => {
                const item = response.data.find((userItems) => userItems.id === parseInt(userId))
                setUser(item)
            })
    }, [userId])
  return (
    <div className="contentOuter">
      <div className="contentLayOut">
        <div className="text-4xl font-semibold bg-sky-100 p-4">{user.name}</div>
        <div className='mt-4'>
          <div className="my-1">Address {user.address}</div>
          <div className="my-1">Phone : {user.phone}</div>
          <div className="my-1">Class : {user.class}</div>
        </div>
        <button className='py-2 px-4 bg-blue-900 text-white font-semibold rounded-lg' onClick={() => {navigate('/users')}}>BACK</button>
      </div>
    </div>
  );
}
