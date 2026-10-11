import { TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { WorkExperience } from './work-experience';
import { environment } from '../../../environments/environment';

describe('WorkExperience service', () => {
  let service: WorkExperience;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
      ],
    });
    service = TestBed.inject(WorkExperience);
  });

  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  

  it('should return the work experience collection', () => {
    expect(service.getWorkExperience()).not.toBeNull();
  });
});
