import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationComponent } from './authorization/authorization';
import { RegistrationComponent } from './registration/registration';
import { ProfileComponent } from './user/profile/profile';
import { ExerciseComponent } from './user/exercise/exercise';
import { DataChangeComponent } from './user/dataChange/dataChange';
import { StatisticsComponent } from './user/statistics/statistics';


const routes: Routes = [
  { path: '', component: AuthorizationComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'exercise', component: ExerciseComponent},
  { path: 'dataChange', component: DataChangeComponent},
  { path: 'statistics', component: StatisticsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
