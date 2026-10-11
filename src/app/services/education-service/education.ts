import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Education as EducationModel } from '../../models/education/education.model';

@Injectable({
  providedIn: 'root',
})
export class Education {
  private readonly dbPath = '/education';
  private readonly educationRef: AngularFirestoreCollection<EducationModel>;

  constructor(private readonly db: AngularFirestore) {
    this.educationRef = this.db.collection(this.dbPath);
  }

  getEducation(): AngularFirestoreCollection<EducationModel> {
    return this.educationRef;
  }
}
