import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

export default function Users() {
  const [data, setData] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()

  const cls = searchParams.get('class')
  const handleClass = (e) => {
    setSearchParams({
      class : e.target.value
    })
  }

  const navigate = useNavigate()

  useEffect(() => {
    axios.get('data.json')
      .then((response) => {
        setData(response.data)
      })
  }, [])

  return (
    <div className="bg-gray-400">
      <div className="contentLayOut flex flex-col gap-6">
        <div>
          <label>Select Class</label>
          <select className='border-2 ml-2 p-1' onChange={handleClass}>
            <option value={null}>All</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
          </select>
        </div>
        {data
          .filter((item) => {
            if (!cls) {
              return true;
            }
            return cls === item.class;
          })
          .map((item) => {
            return (
              <div
                className="rounded-lg border-2 border-gray-300 bg-sky-100 p-6 italic"
                key={item.id}
                onClick={() => {
                  navigate(`details/${item.id}`, {
                    state: {
                      data: item,
                    },
                  });
                }}
              >
                <h1 className="text-2xl">{item.name}</h1>
                <p>{item.address}</p>
                <p>class {item.class}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
