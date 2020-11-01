//import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../api.service';


import { student } from './student';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html'
  //styleUrls: ['./student-form.component.css']
})

export class StudentFormComponent { 
 
    error=false;
    addnewstudent=false;
    sucess=false;
    Cancel=false;
    


model = new student (0,'', '', '', '','');
    submitted = false;
    studentList:any;
    departmentList:any;
    constructor(private apiService: ApiService){}
    
    ngOnInit()
   {
    this.PageLoad();
   }

   PageLoad()
   {
    this.apiService.getStudents().subscribe((res)=>{
      console.log(res);
          this.studentList = res;
          console.log(this.studentList);    
    });
    
      this.apiService.getDepartment().subscribe((res)=>{
        console.log(res);
            this.departmentList=res;
      });

   }

    onSubmit() { this.submitted = true;

        console.log('Studentmodel',this.model);
        this.apiService.createStudent(this.model).subscribe((res)=>{
        
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
      this.model=obj;
      this.addnewstudent=true;
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