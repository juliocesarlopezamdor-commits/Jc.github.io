import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { Skills } from './skills';
import { Skills as SkillsService } from '../services/skills-service/skills';

describe('Skills', () => {
  let component: Skills;
  let fixture: ComponentFixture<Skills>;
  const skill = { name: 'TypeScript', level: 'Advanced' };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Skills],
      providers: [
        {
          provide: SkillsService,
          useValue: {
            getSkills: () => ({
              snapshotChanges: () =>
                of([
                  {
                    payload: {
                      doc: { id: 'skill-id', data: () => skill },
                    },
                  },
                ] as never),
            }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Skills);
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

  it('should display skills from the service', () => {
    const element = fixture.nativeElement as HTMLElement;

    expect(component.skills[0].id).toBe('skill-id');
    expect(element.textContent).toContain(skill.name);
    expect(element.textContent).toContain(skill.level);
  });
});
