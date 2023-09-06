import React from 'react'
import { Container } from '../Layout/Container';
import './Main.scss';
import { List } from './List/List';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../app/features/listSlice';
import { MyForm } from '../UI/MyForm/MyForm';
import { MyModal } from '../UI/MyModal/MyModal';
import { setIsInvisible } from '../../app/features/modalSlice';
import { updateUser  } from '../../app/features/listSlice';
import { State, User } from '../../types';

export const Main = () => {
  const [username, setUsername] = React.useState('');
  const [usernameToUpdate, setUsernameToUpdate] = React.useState('');
  const { selectedUserId, list } = useSelector((state: State) => state.list);
  const dispatch = useDispatch();

  const saveUsersToLocalStorage = (users: User[]) => {
    localStorage.setItem('users', JSON.stringify(users));
  };

  function handleSaveUser() {
    if (username) {
      const newUser = {
        name: username,
        id: Date.now()
      };
      const updatedUsers = [...list, newUser];
      saveUsersToLocalStorage(updatedUsers);
      dispatch(addUser({
        name: username,
        id: Date.now(),
      }));
      setUsername('');
    }
  }

  function handleUpdateUser() {
    if (usernameToUpdate) {
      const updatedUsers = list.map((user: User) =>
      user.id === selectedUserId ? { ...user, name: usernameToUpdate } : user
    );
    saveUsersToLocalStorage(updatedUsers);
      dispatch(setIsInvisible());
      dispatch(updateUser({name: usernameToUpdate, id: selectedUserId}));
      setUsernameToUpdate('');
    }
  }

  React.useEffect(() => {
    const usersString = localStorage.getItem('users');
    if (usersString) {
      const users = JSON.parse(usersString);
      users.forEach((user: User) => dispatch(addUser(user)));
    }
  }, []);

  return (
    <Container>
      <div className='main'>
        <MyModal>
          <MyForm
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsernameToUpdate(e.target.value)}
            value={usernameToUpdate}
            buttonText="Update user"
            onSubmit={handleUpdateUser}
            placeholder="Update a user"
          />
        </MyModal>
        <div className='main__list'>
          <List 
            header="User's list"
            saveUsersToLocalStorage={saveUsersToLocalStorage}
          />
        </div>
        <div className='main__form'>
          <MyForm
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
            value={username}
            buttonText="Save user"
            onSubmit={handleSaveUser}
            placeholder="Save new user"
          />
        </div>
      </div>
    </Container>
  )
}
