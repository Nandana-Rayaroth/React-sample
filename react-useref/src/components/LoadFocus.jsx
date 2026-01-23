import React, { useEffect, useRef } from 'react'

export default function LoadFocus() {
    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current = inputRef.current.focus()
    })
  return (
    <div>
      <input type='text' ref={inputRef} />
    </div>
  )
}
