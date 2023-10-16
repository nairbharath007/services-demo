import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { SearchStudentComponent } from './search-student/search-student.component';

const routes: Routes = [{
  path:"update",
  component: UpdateStudentComponent
},
{
  path:"add",
  component: AddStudentComponent
},
{
  path:"remove",
  component: DeleteStudentComponent
},
{
  path:"search",
  component: SearchStudentComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
