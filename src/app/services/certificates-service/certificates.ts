import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Certificate } from '../../models/certificates/certificaates.model';

@Injectable({
  providedIn: 'root',
})
export class Certificates {
  private readonly dbPath = '/certificates';
  private readonly certificatesRef: AngularFirestoreCollection<Certificate>;

  constructor(private readonly db: AngularFirestore) {
    this.certificatesRef = this.db.collection(this.dbPath);
  }

  getCertificates(): AngularFirestoreCollection<Certificate> {
    return this.certificatesRef;
  }
}
