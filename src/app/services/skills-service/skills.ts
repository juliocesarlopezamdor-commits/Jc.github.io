import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Skill } from '../../models/skills/skills.model';

@Injectable({
  providedIn: 'root',
})
export class Skills {
  private readonly dbPath = '/skills';
  private readonly skillsRef: AngularFirestoreCollection<Skill>;

  constructor(private readonly db: AngularFirestore) {
    this.skillsRef = this.db.collection(this.dbPath);
  }

  getSkills(): AngularFirestoreCollection<Skill> {
    return this.skillsRef;
  }
}
