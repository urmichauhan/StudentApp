import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {
public studentData:any;
  constructor() { }

  /**
   * @description Set student data to variable
   * @param data Student data
   */
   addStudentData(data) {
    this.studentData = data;
  }

  /**
   * @description Get student data to show in List
   */
  get getStudentData() {
    return this.studentData;
  }
}
