import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { of } from 'rxjs';

import { Header } from './header';
import { HeaderService } from '../services/header-service/header';
import { environment } from '../../environments/environment';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;
  let service: HeaderService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Header],
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
      ],
      providers: [
        {
          provide: HeaderService,
          useValue: {
            getHeader: () => ({
              snapshotChanges: () => of([]),
            }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(HeaderService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(service).toBeTruthy();
  });
});
