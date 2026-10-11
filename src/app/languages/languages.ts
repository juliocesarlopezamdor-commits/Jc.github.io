import { afterNextRender, ChangeDetectorRef, Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Language } from '../models/languages/languages.model';
import { Languages as LanguagesService } from '../services/languages-service/languages';

@Component({
  selector: 'app-languages',
  standalone: false,
  templateUrl: './languages.html',
  styleUrl: './languages.css',
})
export class Languages {
  languages: Language[] = [];

  constructor(
    private readonly languagesService: LanguagesService,
    private readonly changeDetectorRef: ChangeDetectorRef,
  ) {
    afterNextRender(() => {
      this.languagesService
        .getLanguages()
        .snapshotChanges()
        .pipe(
          map((changes) =>
            changes.map((change) => ({
              ...change.payload.doc.data(),
              id: change.payload.doc.id,
            })),
          ),
        )
        .subscribe((languages) => {
          this.languages = languages;
          this.changeDetectorRef.detectChanges();
        });
    });
  }
}
