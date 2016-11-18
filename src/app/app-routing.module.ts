import { NgModule } from '@angular/core';
import { Routes, Route, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SecondComponent } from './second/second.component';

import { Home1Component } from './home/home1/home1.component';
import { Home2Component } from './home/home2/home2.component';
import { HomeDetailComponent } from './home/home-detail/home-detail.component';

const fullbackRoute: Route = {
  path: '**', component: HomeComponent
};

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent,
    children: [
      { path: '', redirectTo: 'home1' },
      { path: 'home1', component: Home1Component },
      { path: 'home2', component: Home2Component },
      { path: ':id', component: HomeDetailComponent }
    ]
  },
  { path: 'second', component: SecondComponent },
  fullbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule { }
