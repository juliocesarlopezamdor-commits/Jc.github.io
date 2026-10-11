import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { TestBed } from '@angular/core/testing';
import { Education as EducationModel } from '../../models/education/education.model';

import { Education } from './education';

describe('Education service', () => {
  let service: Education;
  const collection = {} as AngularFirestoreCollection<EducationModel>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: AngularFirestore,
          useValue: { collection: () => collection },
        },
      ],
    });
    service = TestBed.inject(Education);
  });

  /*
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  */

  it('should return the education collection', () => {
    expect(service.getEducation()).toBe(collection);
  });
});
