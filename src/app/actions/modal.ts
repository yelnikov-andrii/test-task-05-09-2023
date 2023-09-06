const setIsVisible = () => {
  return {
    type: 'OPEN_MODAL',
  }
};

const setIsInvisible = () => {
  return {
    type: 'HIDE_MODAL',
  }
};

export const modalActions = {
  setIsVisible,
  setIsInvisible
};