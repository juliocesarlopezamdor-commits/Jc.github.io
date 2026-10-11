import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { WorkExperience as WorkExperienceModel } from '../../models/work-experience/work-experience.model';

@Injectable({
  providedIn: 'root',
})
export class WorkExperience {
  private readonly dbPath = '/work-experience';
  private readonly workExperienceRef: AngularFirestoreCollection<WorkExperienceModel>;

  constructor(private readonly db: AngularFirestore) {
    this.workExperienceRef = this.db.collection(this.dbPath);
  }

  getWorkExperience(): AngularFirestoreCollection<WorkExperienceModel> {
    return this.workExperienceRef;
  }
}
