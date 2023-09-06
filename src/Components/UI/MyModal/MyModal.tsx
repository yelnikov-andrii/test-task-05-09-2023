import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './MyModal.scss';
import classNames from 'classnames';
import { setIsInvisible } from '../../../app/features/modalSlice';
import { State } from '../../../types';

interface Props {
  children: React.ReactNode;
}

export const MyModal: React.FC <Props> = ({ children }) => {
  const { isVisible } = useSelector((state: State) => state.mymodal);
  const dispatch = useDispatch();

  return (
    <div 
      className={classNames('mymodal', {'mymodal--active': isVisible })}
      onClick={(e) => {
        dispatch(setIsInvisible());
      }}  
    >
    <div 
      className='mymodal__modalContent'
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {children}
     </div>
    </div>
  )
}
