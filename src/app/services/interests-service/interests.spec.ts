import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { TestBed } from '@angular/core/testing';
import { Interest } from '../../models/interests/interests.model';

import { Interests } from './interests';

describe('Interests service', () => {
  let service: Interests;
  const collection = {} as AngularFirestoreCollection<Interest>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: AngularFirestore,
          useValue: { collection: () => collection },
        },
      ],
    });
    service = TestBed.inject(Interests);
  });

  /*
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  */

  it('should return the interests collection', () => {
    expect(service.getInterests()).toBe(collection);
  });
});
