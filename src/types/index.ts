export interface EnthusiasmState {
  languageName: string;
  enthusiasmLevel: number;
}

export interface CharacterState {
  name: string;
  gender: string;
}

export interface StoreState {
  enthusiasm: EnthusiasmState;
  characters: CharacterState[];
}
