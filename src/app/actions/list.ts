const addUser = (user: any) => {
  return {
    type: 'ADD_USER',
    payload: user,
  }
};

const deleteUser = (user: any) => {
  return {
    type: 'DELETE_USER',
    payload: user,
  }
};

const updateUser = (user: any) => {
  return {
    type: 'UPDATE_USER',
    payload: user,
  }
}

const selectUser = (userId: number) => {
  return {
    type: 'SELECT_USER',
    payload: userId,
  }
}

export const listActions = {
  addUser,
  deleteUser,
  updateUser,
  selectUser,
};