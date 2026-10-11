import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Language } from '../../models/languages/languages.model';

@Injectable({
  providedIn: 'root',
})
export class Languages {
  private readonly dbPath = '/languages';
  private readonly languagesRef: AngularFirestoreCollection<Language>;

  constructor(private readonly db: AngularFirestore) {
    this.languagesRef = this.db.collection(this.dbPath);
  }

  getLanguages(): AngularFirestoreCollection<Language> {
    return this.languagesRef;
  }
}
