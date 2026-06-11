import { Injectable } from '@nestjs/common';
import { CreateStundenplanDto } from './dto/create-stundenplan.dto';
import { UpdateStundenplanDto } from './dto/update-stundenplan.dto';
import { Stundenplan } from './stundenplan.Interface';

@Injectable()
export class StundenplanService {
  // Test-Stundenplan (im Speicher gehalten)
  private stundenplaene: Stundenplan[] = [
    {
      id: 1,
      tag: 'Montag',
      datum: 'Montag',
      stunden: [
        { fach: 'Mathematik', zeit: '08:00 - 08:50', farbe: '#e57373' },
        { fach: 'Deutsch', zeit: '08:50 - 09:40', farbe: '#64b5f6' },
        { fach: 'Englisch', zeit: '10:00 - 10:50', farbe: '#81c784' },
        { fach: 'WMC', zeit: '10:50 - 11:40', farbe: '#ba68c8' },
        { fach: 'Sport', zeit: '12:00 - 12:50', farbe: '#ffb74d' },
      ],
    },
    {
      id: 2,
      tag: 'Dienstag',
      datum: 'Dienstag',
      stunden: [
        { fach: 'Geschichte', zeit: '08:00 - 08:50', farbe: '#a1887f' },
        { fach: 'Mathematik', zeit: '08:50 - 09:40', farbe: '#e57373' },
        { fach: 'NWT', zeit: '10:00 - 10:50', farbe: '#4db6ac' },
        { fach: 'NWT', zeit: '10:50 - 11:40', farbe: '#4db6ac' },
      ],
    },
    {
      id: 3,
      tag: 'Mittwoch',
      datum: 'Mittwoch',
      stunden: [
        { fach: 'Englisch', zeit: '08:00 - 08:50', farbe: '#81c784' },
        { fach: 'WMC', zeit: '08:50 - 09:40', farbe: '#ba68c8' },
        { fach: 'WMC', zeit: '10:00 - 10:50', farbe: '#ba68c8' },
        { fach: 'Deutsch', zeit: '10:50 - 11:40', farbe: '#64b5f6' },
        { fach: 'Religion', zeit: '12:00 - 12:50', farbe: '#90a4ae' },
      ],
    },
    {
      id: 4,
      tag: 'Donnerstag',
      datum: 'Donnerstag',
      stunden: [
        { fach: 'Mathematik', zeit: '08:00 - 08:50', farbe: '#e57373' },
        { fach: 'Geografie', zeit: '08:50 - 09:40', farbe: '#4fc3f7' },
        { fach: 'Englisch', zeit: '10:00 - 10:50', farbe: '#81c784' },
        { fach: 'Sport', zeit: '10:50 - 11:40', farbe: '#ffb74d' },
      ],
    },
    {
      id: 5,
      tag: 'Freitag',
      datum: 'Freitag',
      stunden: [
        { fach: 'WMC', zeit: '08:00 - 08:50', farbe: '#ba68c8' },
        { fach: 'Deutsch', zeit: '08:50 - 09:40', farbe: '#64b5f6' },
        { fach: 'Mathematik', zeit: '10:00 - 10:50', farbe: '#e57373' },
      ],
    },
  ];

  private readonly wochentage = [
    'Sonntag',
    'Montag',
    'Dienstag',
    'Mittwoch',
    'Donnerstag',
    'Freitag',
    'Samstag',
  ];

  create(createStundenplanDto: CreateStundenplanDto) {
    const newPlan: Stundenplan = {
      id: this.stundenplaene.length
        ? Math.max(...this.stundenplaene.map((p) => p.id)) + 1
        : 1,
      tag: createStundenplanDto.tag,
      datum: createStundenplanDto.datum,
      stunden: createStundenplanDto.stunden ?? [],
    };
    this.stundenplaene.push(newPlan);
    return newPlan;
  }

  findAll() {
    return this.stundenplaene;
  }

  // Liefert den Stundenplan fuer den heutigen Wochentag.
  // Am Wochenende wird auf Montag zurueckgefallen.
  findHeute() {
    const heute = this.wochentage[new Date().getDay()];
    const plan =
      this.stundenplaene.find((p) => p.tag === heute) ??
      this.stundenplaene.find((p) => p.tag === 'Montag');

    if (!plan) {
      return { datum: heute, stunden: [] };
    }

    return { datum: plan.tag, stunden: plan.stunden };
  }

  findOne(id: number) {
    return this.stundenplaene.find((p) => p.id === id) ?? 'Not found';
  }

  update(id: number, updateStundenplanDto: UpdateStundenplanDto) {
    const index = this.stundenplaene.findIndex((p) => p.id === id);
    if (index === -1) {
      return 'Not found';
    }

    this.stundenplaene[index] = {
      ...this.stundenplaene[index],
      ...updateStundenplanDto,
    };
    return this.stundenplaene[index];
  }

  remove(id: number) {
    const index = this.stundenplaene.findIndex((p) => p.id === id);
    if (index === -1) {
      return 'Not found';
    }

    const [removed] = this.stundenplaene.splice(index, 1);
    return removed;
  }
}
