import React from 'react'
import MyButton from './MyButton';

export default function Component2({ setHeadline }) {
  return (
    <div>
      Component 2
      <MyButton
        title='Sätt headline till Component 1'
        setHeadline={setHeadline}
        setHeadlineTo={'Headline from Component 2'} />
    </div>
  )
}
