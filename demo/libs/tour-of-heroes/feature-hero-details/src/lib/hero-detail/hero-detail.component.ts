import { Component } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '@shared/models';
import { HeroService } from '@shared/data-access-heroes';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent {
  hero$: Observable<Hero> = this.route.queryParamMap.pipe(
    switchMap((params: ParamMap) => {
      const id = params.get('id') ?? 0;
      return this.heroService.getHero(+id);
    })
  );

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private snackbar: MatSnackBar
  ) {}

  goBack(): void {
    this.location.back();
  }

  save(hero: Hero): void {
    if (hero) {
      this.heroService.updateHero(hero);
      this.snackbar.open('Updated hero successfully!');
    }
  }

  delete(hero: Hero): void {
    this.heroService.deleteHero(hero.id);
  }
}
