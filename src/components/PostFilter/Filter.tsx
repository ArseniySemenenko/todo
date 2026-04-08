import React from 'react';
import Input from '../UI/Input/Input';
import './Filter.css';


interface IProps{
    filter: (sub: String) => void,
}

export default function Filter({filter}: IProps) {
  return (
    <div 
        className='filter'
    >
        <form
            className=''
            onSubmit={(e) => {
                e.preventDefault();
            }}
        >
            <Input
                type="text" 
                placeholder='Search'
                onChange={(e) => {
                    filter(e.target.value);
                }}
            />
        </form>
    </div>
  )
}
