import { NgModule } from '@angular/core';
import { Routes, Route, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SecondComponent } from './second/second.component';

const fullbackRoute: Route = {
  path: '**', component: HomeComponent
};

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'second', component: SecondComponent },
  fullbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
