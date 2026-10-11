import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { TestBed } from '@angular/core/testing';
import { Language } from '../../models/languages/languages.model';

import { Languages } from './languages';

describe('Languages service', () => {
  let service: Languages;
  const collection = {} as AngularFirestoreCollection<Language>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: AngularFirestore,
          useValue: { collection: () => collection },
        },
      ],
    });
    service = TestBed.inject(Languages);
  });

  /*
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  */

  it('should return the languages collection', () => {
    expect(service.getLanguages()).toBe(collection);
  });
});
