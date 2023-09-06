import React from 'react';
import './MyForm.scss';
import { MyInput } from '../MyInput/MyInput';
import { MyButton } from '../MyButton/MyButton';

interface Props {
  onSubmit: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  buttonText: string;
  placeholder: string;
}

export const MyForm: React.FC <Props>  = ({ onSubmit, onChange, value, buttonText, placeholder }) => (
  <form className='myform'>
    <MyInput 
      type='text'
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
    <MyButton 
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      {buttonText}
    </MyButton>
  </form>
);
