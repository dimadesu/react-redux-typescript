export interface CharacterState {
  id: string;
  name: string;
  gender: string;
}

export interface UserState {
  id: number;
  name: string;
  color: string;
  isLoggedIn: boolean;
}

export interface CommentState {
  id: number;
  value: string;
  userId: number;
  characterId: string;
}

export interface RatingState {
  id: number;
  value: number;
  userId: number;
  characterId: string;
}

export interface StoreState {
  characters: CharacterState[];
  characterDetails: CharacterState;
  users: UserState[];
  comments: CommentState[];
  ratings: RatingState[];
}
