import React from 'react';
import './MyButton.scss';

export const MyButton: React.FC <any> = ({children, ...props}) => {
  return (
    <button
      className='mybutton'
      {...props}
    >
      {children}
    </button>
  )
}
