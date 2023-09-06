export interface User {
  name: string;
  id: number;
}

interface ListState {
  list: User[];
  selectedUserId: number | null;
}

interface ModalState {
  isVisible: boolean;
}

export interface State {
  list: ListState,
  mymodal: ModalState,
}