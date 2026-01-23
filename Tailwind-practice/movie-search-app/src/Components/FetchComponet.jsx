import React, { useEffect, useState } from 'react'



export default function FetchComponet() {
    const [movie, setMovie] = useState([])
    useEffect(() => {
        const fetchResult = async () => {
            try{
                const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=348ce71605a67ed83960815f022c9856&query=Avengers`)
            }
        }
    })
  return (
    <div>
      
    </div>
  )
}
