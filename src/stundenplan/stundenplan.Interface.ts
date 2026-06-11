export interface Stunde {
  fach: string;
  zeit: string;
  farbe: string;
}

export interface Stundenplan {
  id: number;
  tag: string;
  datum: string;
  stunden: Stunde[];
}
