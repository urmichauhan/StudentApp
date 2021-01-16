import { Component, OnInit } from '@angular/core';
import { StudentserviceService } from '../../services/studentservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.scss']
})
export class StudentdetailsComponent implements OnInit {
public studentData:any;
  constructor(public studentService: StudentserviceService,public router:Router) {

  }

  ngOnInit(): void {
    this.studentData = this.studentService.getStudentData;
    console.log(this.studentData);
    if(!this.studentData){
      this.router.navigate(['data'])
    }
  }
}
