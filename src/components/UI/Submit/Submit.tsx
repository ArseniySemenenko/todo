import React from 'react';
import './Submit.css';

interface IProps{
    type: string,
    value: string,
    onClick: (e: any) => void,
}

export default function Submit({type , value , onClick} : IProps) {
  return (
    <input
        className='submit'
        type={type}
        value={value}
        onClick={onClick}
     />
  )
}
