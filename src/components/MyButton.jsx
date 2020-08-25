import React from 'react'

export default function MyButton({ setHeadline, title, setHeadlineTo }) {
  const handleOnClick = () => {
    setHeadline(setHeadlineTo)
  }
  return (
    <div>
      <button onClick={handleOnClick}>
        {title}
      </button>
    </div>
  )
}
