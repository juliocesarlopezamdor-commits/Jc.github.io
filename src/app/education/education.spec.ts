import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { Education } from './education';
import { Education as EducationService } from '../services/education-service/education';

describe('Education', () => {
  let component: Education;
  let fixture: ComponentFixture<Education>;
  const educationItem = {
    degree: 'Software Engineering',
    institution: 'Example University',
    startDate: '2020',
    endDate: '2024',
    location: 'Remote',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Education],
      providers: [
        {
          provide: EducationService,
          useValue: {
            getEducation: () => ({
              snapshotChanges: () =>
                of([
                  {
                    payload: {
                      doc: { id: 'education-id', data: () => educationItem },
                    },
                  },
                ] as never),
            }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Education);
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

  it('should display education from the service', () => {
    const element = fixture.nativeElement as HTMLElement;

    expect(component.educationItems[0].id).toBe('education-id');
    expect(element.textContent).toContain(educationItem.degree);
    expect(element.textContent).toContain(educationItem.institution);
  });
});
