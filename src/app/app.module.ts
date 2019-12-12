import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizationComponent } from './authorization/authorization';
import { AuthorizationsService } from './authorization.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration';
import { ProfileComponent } from './user/profile/profile';
import { ExerciseService } from './exercise.service';
import { ExerciseComponent } from './user/exercise/exercise';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule, MatDialogModule } from '@angular/material';
import { DataChangeComponent } from './user/dataChange/dataChange';
import { StatisticsService } from './statistics.server';
import { MatTableModule } from '@angular/material/table';
import { StatisticsComponent } from './user/statistics/statistics';
import { DoExerciseComponent } from './user/doExercise/doExercise';
import { TrainResultComponent } from './user/doExercise/train-result/train-result.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    RegistrationComponent,
    ProfileComponent,
    ExerciseComponent,
    DoExerciseComponent,
    DataChangeComponent,
    StatisticsComponent,
    TrainResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatListModule,
    MatDialogModule,
    MatRadioModule,
    MatTableModule
  ],
  entryComponents: [
    TrainResultComponent
  ],
  providers: [AuthorizationsService, ExerciseService, StatisticsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
