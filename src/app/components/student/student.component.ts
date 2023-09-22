import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl} from '@angular/forms'
import { Observable } from 'rxjs';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentDetail !: FormGroup;
  studentObject: Student = new Student();
  studentList: Student[] = [];

  constructor(private formBuilder : FormBuilder, private studentService: StudentService) {
    
  }

  ngOnInit(): void {

    this.getAllStudents()

    this.studentDetail = this.formBuilder.group({
      id: [''],
      name: [''],
      surname: ['']
    });

    
  }

  addStudent() {
 
    this.studentObject.id = this.studentDetail.value.id;
    this.studentObject.name = this.studentDetail.value.name;
    this.studentObject.surname = this.studentDetail.value.surname;

    this.studentService.addStudent(this.studentObject).subscribe((res) => {
 
      this.getAllStudents()
    }, error => {
      console.log(error, 'error')
    }
    )
  }

  editStudent(std: Student) {
     
    this.studentDetail.controls['id'].setValue(std.id);
    this.studentDetail.controls['name'].setValue(std.name)
    this.studentDetail.controls['surname'].setValue(std.surname)
    
  }

  getAllStudents() {
    this.studentService.getStudent().subscribe((data:any) => {
      this.studentList = data;
    }, error => {
      console.log(error)
     })
  }

  updateStudent(){

    this.studentObject.id = this.studentDetail.value.id;
    this.studentObject.name = this.studentDetail.value.name;
    this.studentObject.surname = this.studentDetail.value.surname;

      this.studentService.updateStudent(this.studentObject).subscribe(res => {
      console.log(res);
      this.getAllStudents()
    }, err => {
      console.log(err)
    })

  }

}
