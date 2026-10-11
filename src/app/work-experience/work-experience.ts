import { afterNextRender, ChangeDetectorRef, Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { WorkExperience as WorkExperienceModel } from '../models/work-experience/work-experience.model';
import { WorkExperience as WorkExperienceService } from '../services/work-experience-service/work-experience';

@Component({
  selector: 'app-work-experience',
  standalone: false,
  templateUrl: './work-experience.html',
  styleUrl: './work-experience.css',
})
export class WorkExperience {
  experiences: WorkExperienceModel[] = [];

  constructor(
    private readonly workExperienceService: WorkExperienceService,
    private readonly changeDetectorRef: ChangeDetectorRef,
  ) {
    afterNextRender(() => {
      this.workExperienceService
        .getWorkExperience()
        .snapshotChanges()
        .pipe(
          map((changes) =>
            changes.map((change) => ({
              ...change.payload.doc.data(),
              id: change.payload.doc.id,
            })),
          ),
        )
        .subscribe((experiences) => {
          this.experiences = experiences;
          this.changeDetectorRef.detectChanges();
        });
    });
  }
}
