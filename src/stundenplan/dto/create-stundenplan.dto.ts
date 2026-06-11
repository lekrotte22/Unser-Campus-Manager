export class StundeDto {
  fach: string;
  zeit: string;
  farbe: string;
}

export class CreateStundenplanDto {
  tag: string;
  datum: string;
  stunden: StundeDto[];
}
