import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes/heroes.component';
import { RouterModule, Routes } from '@angular/router';
import { DataAccessHeroesModule } from '@shared/data-access-heroes';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {FlipCardModule} from "@toh/shared-ui-kit";

const routes: Routes = [
  { path: '', component: HeroesComponent },
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        DataAccessHeroesModule,
        RouterModule.forChild(routes),
        MatButtonModule,
        MatIconModule,
        FlipCardModule
    ],
  declarations: [HeroesComponent],
  exports: [HeroesComponent]
})
export class FeatureHeroesModule {}
