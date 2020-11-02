import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentFormComponent } from './Student/student-form.component';
import{departmentcomp} from './Department/department.component';



const routes: Routes = [{path: 'Students', component: StudentFormComponent },{path:'dept',component:departmentcomp}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
