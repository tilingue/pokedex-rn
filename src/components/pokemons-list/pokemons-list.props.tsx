export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonsApiResults {
  count: number;
  next: null | string;
  previous: null | string;
  results: Pokemon[];
}
