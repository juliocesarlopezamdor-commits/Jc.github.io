import { afterNextRender, ChangeDetectorRef, Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Header as HeaderModel } from '../models/header/header.model';
import { HeaderService } from '../services/header-service/header';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  header: HeaderModel = new HeaderModel();

  constructor(
    private headerService: HeaderService,
    private changeDetectorRef: ChangeDetectorRef,
  ) {
    afterNextRender(() => {
      this.headerService
        .getHeader()
        .snapshotChanges()
        .pipe(
          map((changes) =>
            changes.map((change) => ({
              id: change.payload.doc.id,
              ...change.payload.doc.data(),
            })),
          ),
        )
        .subscribe((data) => {
          if (data.length > 0) {
            this.header = data[0];
            this.changeDetectorRef.detectChanges();
          }
        });
    });
  }
}
