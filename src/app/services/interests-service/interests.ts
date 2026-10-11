import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Interest } from '../../models/interests/interests.model';

@Injectable({
  providedIn: 'root',
})
export class Interests {
  private readonly dbPath = '/interests';
  private readonly interestsRef: AngularFirestoreCollection<Interest>;

  constructor(private readonly db: AngularFirestore) {
    this.interestsRef = this.db.collection(this.dbPath);
  }

  getInterests(): AngularFirestoreCollection<Interest> {
    return this.interestsRef;
  }
}
