//import { NgIf } from '@angular/common';
import { Component, ɵConsole } from '@angular/core';
import { ApiService } from '../api.service';
import { department } from '../Department/department';



import { student } from './student';

@Component({
  
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})

export class StudentFormComponent {
  
 
    error=false; 
    addnewstudent=false;
    sucess=false;
    Cancel=false;
    


model = new student (0,'', '', '', '','',new department(0,"abc"));
    submitted = false;
    studentList:any;
    departmentList:department;
    dept=new department(0,""); 
    constructor(private apiService: ApiService){}
    
    ngOnInit()
   {
    this.PageLoad();
   }

   PageLoad()
   {
    this.apiService.getStudents().subscribe((res)=>{
          this.studentList = res;  
          console.log("check student list",this.studentList);
          
    });
    
      this.apiService.getDepartment().subscribe((res:department)=>{
        console.log(res);
            this.departmentList=res;
      });
 
   }

    onSubmit() { 
        this.submitted = true;
        this.model.Dept.DepartmentName=this.dept.DepartmentName;
        this.model.Dept._id=this.dept._id;
        console.log('Studentmodel',this.model);
        this.apiService. createStudent(this.model).subscribe((res)=>{
        
          console.log('studentResponse',res);

  
         // if (res['status']==200) {
            this.sucess=true;
            this.PageLoad();
            this.addnewstudent=false;


    
  //} else {
   // this.sucess=false;
  //}  
              console.log(res);
            },error => {
              this.error=true;
            }
            );      
      

    console.log(this.model);
    }

    cancel(){
      this.addnewstudent=false;
    }
    addstudent(){
      this.addnewstudent=true;
     
    }

    editstudent(obj:student)
    {
      console.log("obj check",obj,this.dept);
      this.model=obj;  
      this.dept.DepartmentName=obj.Dept.DepartmentName;
      this.dept._id=obj.Dept._id; 
      this.addnewstudent=true; 
    }
 
    change(obj)
    {
     console.log(obj);
    }

    deletestudent(id)
    {
      this.apiService.deleteStudent(id).subscribe((res)=>{
        this.PageLoad();
      });
    }


    //newStudent() {
      //  this.model = new Student(42, '', '');
      //}

  
    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.onSubmit); }}