import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { TestBed } from '@angular/core/testing';
import { Skill } from '../../models/skills/skills.model';

import { Skills } from './skills';

describe('Skills service', () => {
  let service: Skills;
  const collection = {} as AngularFirestoreCollection<Skill>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: AngularFirestore,
          useValue: { collection: () => collection },
        },
      ],
    });
    service = TestBed.inject(Skills);
  });

  /*
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  */

  it('should return the skills collection', () => {
    expect(service.getSkills()).toBe(collection);
  });
});
