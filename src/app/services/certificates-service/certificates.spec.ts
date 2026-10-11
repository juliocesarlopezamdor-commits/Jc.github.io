import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { TestBed } from '@angular/core/testing';
import { Certificate } from '../../models/certificates/certificaates.model';

import { Certificates } from './certificates';

describe('Certificates service', () => {
  let service: Certificates;
  const collection = {} as AngularFirestoreCollection<Certificate>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: AngularFirestore,
          useValue: { collection: () => collection },
        },
      ],
    });
    service = TestBed.inject(Certificates);
  });

  /*
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  */

  it('should return the certificates collection', () => {
    expect(service.getCertificates()).toBe(collection);
  });
});
