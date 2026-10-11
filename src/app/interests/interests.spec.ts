import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { Interests } from './interests';
import { Interests as InterestsService } from '../services/interests-service/interests';

describe('Interests', () => {
  let component: Interests;
  let fixture: ComponentFixture<Interests>;
  const interest = { name: 'Open source development' };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Interests],
      providers: [
        {
          provide: InterestsService,
          useValue: {
            getInterests: () => ({
              snapshotChanges: () =>
                of([
                  {
                    payload: {
                      doc: { id: 'interest-id', data: () => interest },
                    },
                  },
                ] as never),
            }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Interests);
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

  it('should display interests from the service', () => {
    const element = fixture.nativeElement as HTMLElement;

    expect(component.interests[0].id).toBe('interest-id');
    expect(element.textContent).toContain(interest.name);
  });
});
