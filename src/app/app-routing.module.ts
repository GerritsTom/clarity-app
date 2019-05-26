import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { SpielrundeComponent } from './spielrunde/spielrunde.component';
import { SpielrundeDetailComponent } from './spielrunde/spielrunde-detail/spielrunde-detail.component';
import { SpielResolver } from './spielrunde/spiel-resolver.service';
import { SpielrundeEditComponent } from './spielrunde/spielrunde-edit/spielrunde-edit.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'spielrunde', component: SpielrundeComponent, children: [
    {path: ':id', component: SpielrundeDetailComponent, resolve: {spiele: SpielResolver}, children: [
      {path: 'spiel/:id/edit', component: SpielrundeEditComponent}
    ]}
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
