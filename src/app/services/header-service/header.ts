import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Header as HeaderModel } from '../../models/header/header.model';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private dbPath = '/header';

  headerRef: AngularFirestoreCollection<HeaderModel>;

  constructor(private db: AngularFirestore) {
    this.headerRef = db.collection(this.dbPath);
  }

  getHeader(): AngularFirestoreCollection<HeaderModel> {
    return this.headerRef;
  }
}
