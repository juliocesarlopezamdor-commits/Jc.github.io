import { afterNextRender, ChangeDetectorRef, Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Interest } from '../models/interests/interests.model';
import { Interests as InterestsService } from '../services/interests-service/interests';

@Component({
  selector: 'app-interests',
  standalone: false,
  templateUrl: './interests.html',
  styleUrl: './interests.css',
})
export class Interests {
  interests: Interest[] = [];

  constructor(
    private readonly interestsService: InterestsService,
    private readonly changeDetectorRef: ChangeDetectorRef,
  ) {
    afterNextRender(() => {
      this.interestsService
        .getInterests()
        .snapshotChanges()
        .pipe(
          map((changes) =>
            changes.map((change) => ({
              ...change.payload.doc.data(),
              id: change.payload.doc.id,
            })),
          ),
        )
        .subscribe((interests) => {
          this.interests = interests;
          this.changeDetectorRef.detectChanges();
        });
    });
  }
}
