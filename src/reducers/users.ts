import {UserState} from '../types/index';

interface CustomAction {
  type: string;
  users: UserState[];
}

export function users(state: UserState[], action: CustomAction): UserState[] {
  switch (action.type) {
    default:
      return state ? state : [
        {
          id: 1,
          name: 'User 1',
          color: 'red',
        },
        {
          id: 2,
          name: 'User 2',
          color: 'blue',
        }
      ];
  }
}
