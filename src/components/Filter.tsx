import React from 'react';

interface IProps{
    filter: (sub: String) => void,
}

export default function Filter({filter}: IProps) {
  return (
    <div 
        className='Filter'
    >
        <form
            className=''
            onSubmit={(e) => {
                e.preventDefault();
            }}
        >
            <input 
                className="border border-gray-400 rounded mr-1"
                type="text" 
                placeholder='Seacrh'
                onChange={(e) => {
                    filter(e.target.value);
                }}
            />
        </form>
    </div>
  )
}
