import React from 'react';
import './MyInput.scss';

export const MyInput: React.FC <any> = (props) => {
  return (
    <input
        {...props}
        className='myinput'
      />
  )
}
