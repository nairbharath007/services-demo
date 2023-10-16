import { Component } from '@angular/core';
import { StudentService } from '../services/student.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})
export class SearchStudentComponent{
  searchForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    gender: new FormControl('')
  });

  searchResults: any = [];

  constructor(private studentInfo: StudentService) {
    this.search();
  }

  search() {
    const searchParams = this.searchForm.value;
    this.studentInfo.searchStudents(searchParams).subscribe((data) => {
      this.searchResults = data;
    });
  }
}
