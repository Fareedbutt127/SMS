import { Component } from '@angular/core';
import { ApiService } from '../api.service';

import { department } from './department';

@Component({
  selector: 'app-dept-form',
  templateUrl: './department.component.html'
  //styleUrls: ['./student-form.component.css']
})

export class departmentcomp { 

    addnewdept=false;
    sucess=false;
    Cancel=false
    error=false;


    model = new department (0,'');
    deptlist:any;
    submitted = false;

    constructor(private apiService: ApiService){}    

    ngOnInit()
    {
     this.PageLoad();
    }
 
    PageLoad()
    {

     
       this.apiService.getDepartment().subscribe((res)=>{
         console.log(res);
             this.deptlist=res;
       });
 
    }

    onSubmit() { this.submitted = true;

        console.log('departmentmodel',this.model);
        this.apiService.createdepartment(this.model).subscribe((res)=>{
        
          console.log('departmentResponse',res);


         // if (res['status']==200) {
            this.sucess=true;
            this.PageLoad();
            this.addnewdept=false;
            console.log(res);
        },error => {
          this.error=true;
        }
        );      
  

console.log(this.model);
}

cancel()
{
  this.addnewdept=false;
}

adddept()
{
        this.addnewdept=true;
}

editdept(obj:department)
        {
          this.model=obj;
          this.addnewdept=true;
        }        

deletedept(id)
        {
          this.apiService.deletedept(id).subscribe((res)=>{
            this.PageLoad();
          });
        }

    
        get diagnostic() { return JSON.stringify(this.onSubmit); }}


    
