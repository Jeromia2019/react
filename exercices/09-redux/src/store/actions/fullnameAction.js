export const USER_ADD = 'user/add';

export const userAdd = (data) => {
  return {
    type: USER_ADD,
    payload: data,
  };
};
