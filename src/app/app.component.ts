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
  displayedStudents: any;
  currentPage: number = 1;
  itemsPerPage: number = 10;

  constructor(private studentInfo: StudentService, private router: Router) {
    studentInfo.getAllStudents().subscribe((data) => {
      this.studentData = data;
      console.log(this.studentData)
      this.updateDisplayedStudents();
    
      
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

  


  updateDisplayedStudents() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedStudents = this.studentData.slice(startIndex, endIndex);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updateDisplayedStudents();
    }
  }

  get totalPages() {
    return Math.ceil(this.studentData.length / this.itemsPerPage);
  }
  get pages() {
    return Array(this.totalPages)
      .fill(0)
      .map((_, index) => index + 1);
  }
  
}
