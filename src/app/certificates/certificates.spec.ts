import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { Certificates } from './certificates';
import { Certificates as CertificatesService } from '../services/certificates-service/certificates';

describe('Certificates', () => {
  let component: Certificates;
  let fixture: ComponentFixture<Certificates>;
  const certificate = {
    title: 'Angular Certificate',
    issuer: 'Example Academy',
    date: '2025',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Certificates],
      providers: [
        {
          provide: CertificatesService,
          useValue: {
            getCertificates: () => ({
              snapshotChanges: () =>
                of([
                  {
                    payload: {
                      doc: { id: 'certificate-id', data: () => certificate },
                    },
                  },
                ] as never),
            }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Certificates);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
  });

  /*
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  */

  it('should display certificates from the service', () => {
    const element = fixture.nativeElement as HTMLElement;

    expect(component.certificates[0].id).toBe('certificate-id');
    expect(element.textContent).toContain(certificate.title);
    expect(element.textContent).toContain(certificate.issuer);
  });
});
