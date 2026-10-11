import { afterNextRender, ChangeDetectorRef, Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Education as EducationModel } from '../models/education/education.model';
import { Education as EducationService } from '../services/education-service/education';

@Component({
  selector: 'app-education',
  standalone: false,
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {
  educationItems: EducationModel[] = [];

  constructor(
    private readonly educationService: EducationService,
    private readonly changeDetectorRef: ChangeDetectorRef,
  ) {
    afterNextRender(() => {
      this.educationService
        .getEducation()
        .snapshotChanges()
        .pipe(
          map((changes) =>
            changes.map((change) => ({
              ...change.payload.doc.data(),
              id: change.payload.doc.id,
            })),
          ),
        )
        .subscribe((educationItems) => {
          this.educationItems = educationItems;
          this.changeDetectorRef.detectChanges();
        });
    });
  }
}
