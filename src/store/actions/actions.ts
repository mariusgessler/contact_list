export const ADD_USERS = 'ADD_USERS'

export interface Action {
  type: typeof ADD_USERS,
}

export const addUsers = (): Action => {
  return {
    type: ADD_USERS,
  };
};