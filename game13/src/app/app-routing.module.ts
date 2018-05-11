import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GameroomComponent } from './gameroom/gameroom.component';

const routes: Routes = [
 
  { path: 'home', component: HomeComponent },
  { path: 'gameroom', component: GameroomComponent },
    { path: '', pathMatch: 'full', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }










