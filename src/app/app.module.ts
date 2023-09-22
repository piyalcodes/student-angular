import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {Routes, RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {ReactiveFormsModule} from '@angular/forms';
import { StudentComponent } from './components/student/student.component';
import { TeacherComponent } from './components/teacher/teacher.component';
 
const routes: Routes = [
{path: 'student', component: StudentComponent},
{path: 'teacher', component: TeacherComponent},
{path: '', component: DashboardComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StudentComponent,
    TeacherComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
