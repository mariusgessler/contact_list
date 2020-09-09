import {
  Action,
  ADD_USERS,
} from '../actions/actions';

const INITIAL_STATE = {
  users: [],
};

export const reducer = (state = INITIAL_STATE, action: Action) => {
  switch(action.type) {
    case ADD_USERS:
      return {
        ...state,
        user: 'User'// Something reduced
      };
    default:
      return state;
  }
};