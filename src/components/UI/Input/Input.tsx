import React from 'react';
import "./Input.css";
import { getValue } from '@testing-library/user-event/dist/utils';

interface IProps{
    type: string,
    placeholder: string,
    onChange: (e: any) => void,
    value?: string,
}
export default function Input({type , placeholder , onChange , value} : IProps) {
  return (
    <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
    />
  )
}
