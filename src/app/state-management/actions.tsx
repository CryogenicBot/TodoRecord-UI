const Actions = {
  LOGIN_USER: "LOGIN_USER"
};

export default Actions;

export function loginUser(userId: number) {
  return {
    type: Actions.LOGIN_USER,
    userId
  };
};