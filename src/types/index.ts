export interface CharacterState {
  id: string;
  name: string;
  gender: string;
}

export interface StoreState {
  characters: CharacterState[];
  characterDetails: CharacterState;
}
