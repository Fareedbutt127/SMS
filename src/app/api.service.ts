import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { student } from './Student/student';


@Injectable({
  providedIn: 'root'
})
export class ApiService {


  apiURL = "http://localhost:3000";


  constructor(private httpClient: HttpClient) {}

  public createStudent(obj: student){
    if(obj._id!=null&& obj._id!=0)
    {
      return this.httpClient.patch(`${this.apiURL}/Students/${obj._id}`,obj);
    }
    else
    return this.httpClient.post(`${this.apiURL}/Students/`,obj);
}

public getDepartment()
{
  return this.httpClient.get(`${this.apiURL}/Departments/`);
}

public deleteStudent(id)
{
  return this.httpClient.delete(`${this.apiURL}/Students/${id}`);
}

public getStudents(){
  return this.httpClient.get(`${this.apiURL}/Students/`);
}
}
