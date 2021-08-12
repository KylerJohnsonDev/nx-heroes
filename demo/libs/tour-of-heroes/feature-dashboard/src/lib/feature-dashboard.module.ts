import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { RouterModule, Routes } from '@angular/router';
import { DataAccessHeroesModule } from '@shared/data-access-heroes';
import {CardModule} from "../../../../shared/ui-kit/src/lib/card/card.module";

const routes: Routes = [
  { path: '', component: DashboardComponent },
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        DataAccessHeroesModule,
        RouterModule.forChild(routes),
        CardModule
    ],
  declarations: [
    DashboardComponent,
    HeroSearchComponent
  ],
  exports: [
    DashboardComponent
  ]
})
export class FeatureDashboardModule {}
