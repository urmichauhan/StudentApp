import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {
public studentData:any;
  constructor() { }

   addStudentData(data) {
    this.studentData = data;
  }

  get getStudentData() {
    return this.studentData;
  }
}
