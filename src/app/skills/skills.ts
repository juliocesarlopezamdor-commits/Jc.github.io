import { afterNextRender, ChangeDetectorRef, Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Skill } from '../models/skills/skills.model';
import { Skills as SkillsService } from '../services/skills-service/skills';

@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  skills: Skill[] = [];

  constructor(
    private readonly skillsService: SkillsService,
    private readonly changeDetectorRef: ChangeDetectorRef,
  ) {
    afterNextRender(() => {
      this.skillsService
        .getSkills()
        .snapshotChanges()
        .pipe(
          map((changes) =>
            changes.map((change) => ({
              ...change.payload.doc.data(),
              id: change.payload.doc.id,
            })),
          ),
        )
        .subscribe((skills) => {
          this.skills = skills;
          this.changeDetectorRef.detectChanges();
        });
    });
  }
}
