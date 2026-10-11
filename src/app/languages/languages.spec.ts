import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { Languages } from './languages';
import { Languages as LanguagesService } from '../services/languages-service/languages';

describe('Languages', () => {
  let component: Languages;
  let fixture: ComponentFixture<Languages>;
  const language = { name: 'Spanish', level: 'Native' };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Languages],
      providers: [
        {
          provide: LanguagesService,
          useValue: {
            getLanguages: () => ({
              snapshotChanges: () =>
                of([
                  {
                    payload: {
                      doc: { id: 'language-id', data: () => language },
                    },
                  },
                ] as never),
            }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Languages);
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

  it('should display languages from the service', () => {
    const element = fixture.nativeElement as HTMLElement;

    expect(component.languages[0].id).toBe('language-id');
    expect(element.textContent).toContain(language.name);
    expect(element.textContent).toContain(language.level);
  });
});
