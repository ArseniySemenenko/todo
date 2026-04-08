import React from 'react';
import './Button.css';

interface IProps{
    text: string,
    onClick: () => void,
}

export default function Button({text , onClick} : IProps) {
  return (
    <button
        onClick={onClick}
    >{text}</button>
  )
}