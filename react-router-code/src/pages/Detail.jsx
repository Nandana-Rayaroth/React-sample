import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import Marks from './Marks';
import Sports from './Sports';
import Remarks from './Remarks';

export default function Detail() {
    const location = useLocation();
    const state = location.state || {};

    const {userId} = useParams()
    const [user, setUser] = useState(state.data)

    const navigate = useNavigate()


    console.log(location)

    useEffect(() => {
      if(!user){
        axios.get("/data.json").then((response) => {
          const item = response.data.find(
            (userItems) => userItems.id === parseInt(userId),
          );
          setUser(item);
        });
      }
    }, [userId, user])

    if(!user){
      return null;
    }
  return (
    <div className="contentOuter">
      <div className="contentLayOut">
        <div className="text-4xl font-semibold bg-sky-100 p-4">{user.name}</div>
        <div className="mt-4">
          <div className="my-1">Address {user.address}</div>
          <div className="my-1">Phone : {user.phone}</div>
          <div className="my-1">Class : {user.class}</div>
        </div>
        <div className="mt-10 flex gap-2 tabBar">
          <NavLink to="marks" className="p-2 bg-stone-400 text-white font-bold">
            Marks
          </NavLink>
          <NavLink
            to="sports"
            className="p-2 bg-stone-400 text-white font-bold"
          >
            Sports
          </NavLink>
          <NavLink
            to="remarks"
            className="p-2 bg-stone-400 text-white font-bold"
          >
            Remarks
          </NavLink>
        </div>
        <div>
          <Outlet context={user}/>
        </div>
        <button
          className="py-2 px-4 bg-blue-900 text-white font-semibold rounded-lg mt-4"
          onClick={() => {
            navigate("/users");
          }}
        >
          BACK
        </button>
      </div>
    </div>
  );
}
