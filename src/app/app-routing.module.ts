import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationComponent } from './authorization/authorization';
import { RegistrationComponent } from './registration/registration';
import { ProfileComponent } from './user/profile/profile';
import { ExerciseComponent } from './user/exercise/exercise';
import { DataChangeComponent } from './user/dataChange/dataChange';
import { StatisticsComponent } from './user/statistics/statistics';
import { DoExerciseComponent } from './user/doExercise/doExercise';
import { CommonModule } from '@angular/common';
import { ExerciseAdminComponent } from './admin/exercise/exercise';
import { AccountsComponent } from './admin/accounts/accounts';
import { ExerciseChangeComponent } from './admin/exerciseChange/exerciseChange';
import { DifficultyLevelChangeComponent } from './admin/difficultyLevelChange/difficultyLevelChange';
import { StatisticsAdminComponent } from './admin/statistics/statistics';
import { InfoComponent } from './info/info';
import { SoundControllerService } from './sound-controller.service';
import { InstructionComponent } from './instruction/instruction';


const routes: Routes = [
  { path: '', component: AuthorizationComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'exercise/:id', component: ExerciseComponent },
  { path: 'do-exercise/:userId/:id', component: DoExerciseComponent },
  { path: 'dataChange/:id', component: DataChangeComponent },
  { path: 'statistics/:id', component: StatisticsComponent },
  { path: 'exerciseAdmin', component: ExerciseAdminComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'exerciseChange/:id', component: ExerciseChangeComponent },
  { path: 'difficultyLevelChange/:id', component: DifficultyLevelChangeComponent },
  { path: 'statisticsAdmin', component: StatisticsAdminComponent },
  { path: 'info', component: InfoComponent },
  { path: 'instruction', component: InstructionComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
