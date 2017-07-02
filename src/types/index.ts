export interface CharacterState {
  id: string;
  name: string;
  gender: string;
}

export interface UserState {
  id: number;
  name: string;
  color: string;
}

export interface StoreState {
  characters: CharacterState[];
  characterDetails: CharacterState;
  users: UserState[];
}
