import React from 'react';
import { useSelector } from 'react-redux';
import './List.scss';
import { MyButton } from '../../UI/MyButton/MyButton';
import { useDispatch } from 'react-redux';
import { setIsVisible } from '../../../app/features/modalSlice';
import { removeUser, selectUser } from '../../../app/features/listSlice';
import { State, User } from '../../../types';

interface Props {
  header: string;
  saveUsersToLocalStorage: (users: User[]) => void;
}

export const List: React.FC <Props> = ({ header, saveUsersToLocalStorage }) => {
  const { list } = useSelector((state: State) => state.list);
  const dispatch = useDispatch();

  function openModal() {
    dispatch(setIsVisible());
  }

  function remove(userId: number) {
    dispatch(removeUser(userId));
    const updatedUsers = list.filter((listItem: User) => listItem.id !== userId);
    saveUsersToLocalStorage(updatedUsers);
  }

  return (
    <div>
      <h2>
        {header}
      </h2>
      <ul className='list'>
      {list.length ? (
        list.map((listItem: User) => (
          <li 
            key={listItem.id}
            className='list__item'
          >
              {listItem.name}
            <div className='list__buttons'>
            <div className='list__button'>
            <MyButton 
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                openModal();
                dispatch(selectUser(listItem.id));
              }}
            >
              Update user
            </MyButton>
            </div>
            <div className='list__button'>
            <MyButton 
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                remove(listItem.id);
              }}
            >
              Remove user
            </MyButton>
            </div>
            </div>
          </li>
        ))
      ) : (
        <div>
          Users not found
        </div>
      )}
    </ul>
    </div>
  )
}