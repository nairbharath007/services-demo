import { Component } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {

  studentData: any;
  addStudent = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    age: new FormControl('', [Validators.required]),
    isMale: new FormControl('', [Validators.required]),
    rollNo: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required])
  })
  constructor(private studentInfo: StudentService, private router: Router) {
  }
  addNewStudent(data: any) {
    this.studentInfo.saveStudent(data).subscribe({
      next: (result) => {
        alert("New Student added succesfully")
        console.log(result)
      },
      error: (errorResponse: HttpErrorResponse) => {
        console.log(errorResponse)
      }
    })
    console.log(data)
  }
}
