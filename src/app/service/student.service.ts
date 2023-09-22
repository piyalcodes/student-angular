import { Injectable } from '@angular/core';
import {HttpClient, HttpClientJsonpModule} from '@angular/common/http'
import { Student } from '../model/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  addStudentUrl : string;

  constructor(private http: HttpClient) 
  { 

    this.addStudentUrl =  "http://127.0.0.1:8080/api/student"
  }

  addStudent(std: Student): Observable<Student> {
    return  this.http.post<Student>(this.addStudentUrl, std);
  }

  getStudent(): Observable<Student> {
    return  this.http.get<Student>(this.addStudentUrl);
  }

  updateStudent(std: Student): Observable<Student> {
    return this.http.put<Student>(`${this.addStudentUrl}/${std.id}`, std);
  }
}
