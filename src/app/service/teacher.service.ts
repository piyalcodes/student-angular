import { Injectable } from '@angular/core';
import {HttpClient, HttpClientJsonpModule} from '@angular/common/http'
import { Teacher } from '../model/teacher';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  addTeacherUrl : string;

  constructor(private http: HttpClient) 
  { 

    this.addTeacherUrl =  "http://127.0.0.1:8080/api/teacher"
  }

  addTeacher(std: Teacher): Observable<Teacher> {
    return  this.http.post<Teacher>(this.addTeacherUrl, std);
  }

  getTeacher(): Observable<Teacher> {
    return  this.http.get<Teacher>(this.addTeacherUrl);
  }

  updateTeacher(std: Teacher): Observable<Teacher> {
    return this.http.put<Teacher>(`${this.addTeacherUrl}/${std.id}`, std);
  }
}
