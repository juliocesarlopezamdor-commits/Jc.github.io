import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../environments/environment.development';

import { WorkExperience } from './work-experience';
import { WorkExperience as WorkExperienceService } from '../services/work-experience-service/work-experience';

describe('WorkExperience', () => {
  let component: WorkExperience;
  let fixture: ComponentFixture<WorkExperience>;
  const experience = {
    position: 'Developer',
    company: 'Example Co.',
    location: 'Remote',
    startDate: '2024',
    endDate: '2025',
    accomplishment: 'Built an application',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkExperience],
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
      ],
      providers: [
        {
          provide: WorkExperienceService,
          useValue: {
            getWorkExperience: () => ({
              snapshotChanges: () =>
                of([
                  {
                    payload: {
                      doc: { id: 'experience-id', data: () => experience },
                    },
                  },
                ] as never),
            }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkExperience);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display work experience from the service', () => {
    const element = fixture.nativeElement as HTMLElement;

    expect(component.experiences[0].id).toBe('experience-id');
    expect(element.textContent).toContain(experience.position);
    expect(element.textContent).toContain(experience.company);
    expect(element.textContent).toContain(experience.accomplishment);
  });
});
