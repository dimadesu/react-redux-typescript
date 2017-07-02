export interface CharacterState {
  name: string;
  gender: string;
}

export interface StoreState {
  characters: CharacterState[];
  characterDetails: CharacterState;
}
