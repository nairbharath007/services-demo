import { Component } from '@angular/core';
import { StudentService } from './services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Student API';
  studentData: any
  currentPage: number = 1;
  itemsPerPage: number = 10;

  constructor(private studentInfo: StudentService, private router: Router) {
    studentInfo.getAllStudents().subscribe((data) => {
      this.studentData = data;
      console.log(this.studentData)
    })
  }

  updateStudent() {
    this.router.navigateByUrl('/update')
  }
  addStudent() {
    this.router.navigateByUrl('/add')
  }
  deleteStudent() {
    this.router.navigateByUrl('/remove')
  }

  searchStudents() {
    this.router.navigateByUrl('/search'); // Add a route for the search component
  }
}
