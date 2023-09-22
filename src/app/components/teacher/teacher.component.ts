import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl} from '@angular/forms'
import { Observable } from 'rxjs';
import { Teacher } from 'src/app/model/teacher';
import { TeacherService } from 'src/app/service/teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  teacherDetail !: FormGroup;
  teacherObject: Teacher = new Teacher();
  teacherList: Teacher[] = [];

  constructor(private formBuilder : FormBuilder, private teacherService: TeacherService) {
    
  }

  ngOnInit(): void {

    this.getAllTeachers()

    this.teacherDetail = this.formBuilder.group({
      id: [''],
      name: [''],
      surname: ['']
    });

    
  }

  addTeacher() {
    console.log(this.teacherDetail, '----')
    this.teacherObject.id = this.teacherDetail.value.id;
    this.teacherObject.name = this.teacherDetail.value.name;
    this.teacherObject.surname = this.teacherDetail.value.surname;

    this.teacherService.addTeacher(this.teacherObject).subscribe((res) => {
      console.log(res, '0000')
      this.getAllTeachers()
    }, error => {
      console.log(error, 'error')
    }
    )
  }

  editTeacher(std: Teacher) {
     
    this.teacherDetail.controls['id'].setValue(std.id);
    this.teacherDetail.controls['name'].setValue(std.name)
    this.teacherDetail.controls['surname'].setValue(std.surname)
    
  }

  getAllTeachers() {
    this.teacherService.getTeacher().subscribe((data:any) => {
      this.teacherList = data;
    }, error => {
      console.log(error)
     })
  }

  updateTeacher(){

    this.teacherObject.id = this.teacherDetail.value.id;
    this.teacherObject.name = this.teacherDetail.value.name;
    this.teacherObject.surname = this.teacherDetail.value.surname;

      this.teacherService.updateTeacher(this.teacherObject).subscribe(res => {
      console.log(res);
      this.getAllTeachers()
    }, err => {
      console.log(err)
    })

  }

}
