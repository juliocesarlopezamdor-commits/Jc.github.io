import { afterNextRender, ChangeDetectorRef, Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Certificate } from '../models/certificates/certificaates.model';
import { Certificates as CertificatesService } from '../services/certificates-service/certificates';

@Component({
  selector: 'app-certificates',
  standalone: false,
  templateUrl: './certificates.html',
  styleUrl: './certificates.css',
})
export class Certificates {
  certificates: Certificate[] = [];

  constructor(
    private readonly certificatesService: CertificatesService,
    private readonly changeDetectorRef: ChangeDetectorRef,
  ) {
    afterNextRender(() => {
      this.certificatesService
        .getCertificates()
        .snapshotChanges()
        .pipe(
          map((changes) =>
            changes.map((change) => ({
              ...change.payload.doc.data(),
              id: change.payload.doc.id,
            })),
          ),
        )
        .subscribe((certificates) => {
          this.certificates = certificates;
          this.changeDetectorRef.detectChanges();
        });
    });
  }
}
