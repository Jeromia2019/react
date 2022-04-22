import {nanoid} from 'nanoid';

export const USER_ADD = 'user/add';
export const USER_REMOVE = 'user/remove';

// (data) mais ici on aime ajouter un coté restrictif dans les actions
export const userAdd = ({firstname, lastname}) => {
  return {
    type: USER_ADD,
    payload: {
      id: nanoid(),
      firstname, 
      lastname},
  };
};

export const userRemove = (userId) => {
  return {
    type: USER_REMOVE,
    payload: userId,
  };
};
