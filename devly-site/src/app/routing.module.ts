import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AppComponent } from './app.component';
import { DevlyDataComponent } from './devly-data/devly-data.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'devlydata', component: DevlyDataComponent },
    { path: 'projects', component: ProjectsComponent},
    { path: '', component: HomeComponent}
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }