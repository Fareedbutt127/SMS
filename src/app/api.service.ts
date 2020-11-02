import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { student } from './Student/student';
import { department } from './Department/department';



@Injectable({
  providedIn: 'root'
})
export class ApiService {


  apiURL = "http://localhost:3000";


  constructor(private httpClient: HttpClient) {}

  public createdepartment(obj: department){
    if(obj._id!=null&& obj._id!=0)
    {
      return this.httpClient.patch(`${this.apiURL}/Departments/${obj._id}`,obj);
    }
    else
    return this.httpClient.post(`${this.apiURL}/Departments/`,obj);
}


  public createStudent(obj: student){
    if(obj._id!=null&& obj._id!=0)
    {
      return this.httpClient.patch(`${this.apiURL}/Students/${obj._id}`,obj);
    }
    else
    return this.httpClient.post(`${this.apiURL}/Students/`,obj);
}

public getStudents()
{
  return this.httpClient.get(`${this.apiURL}/Students/`);
}

public getDepartment()
{
  return this.httpClient.get(`${this.apiURL}/Departments/`);
}

public deleteStudent(id)
{
  return this.httpClient.delete(`${this.apiURL}/Students/${id}`);
}

public deletedept(id)
{
  return this.httpClient.delete(`${this.apiURL}/Departments/${id}`);
}


}
