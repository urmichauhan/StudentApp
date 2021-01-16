import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { StudentserviceService } from '../../services/studentservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-studentregistration',
  templateUrl: './studentregistration.component.html',
  styleUrls: ['./studentregistration.component.scss']
})
export class StudentregistrationComponent implements OnInit {
  @ViewChild('fileInput') myInputVariable: ElementRef
  public submitted: boolean = false;
  public alertText: any = { text: "", class: "" };
  public student = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    studentGroup: ['', [Validators.required]],
    name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\da-zA-Z])(.{6,20})$/)]],
    address: ['', [Validators.required]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
    guardianPhone: ['', [Validators.pattern(/^[0-9]+$/)]],
    enrollmentNumber: ['', [Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]+$/)]],
    status: [''],
    uploadPhoto: ['']
  });
  public statusList: any = ['Active', 'Inactive']
  public groupList: any = ['Information Technology', 'Chemical Engineering', 'Civil Engineering', 'Electrical Engineering', 'Mechanical Engineering'];
  public passwordType = 'password';


  constructor(public fb: FormBuilder, public studentService: StudentserviceService,
    public route: ActivatedRoute, public router: Router) {

  }

  ngOnInit(): void {
    console.log("Student registration page");
  }

  /**
   * @description File upload event
   * @param page Image data
   */
  onSelectFile(event) {
    let allowTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    console.log(event.target.files[0].type)
    if (event.target.files && event.target.files[0] && allowTypes.indexOf(event.target.files[0].type) > -1) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => {
        this.student.get('uploadPhoto').setValue(event.target.result);
      }
    } else {
      window.scroll(0, 0);
      this.myInputVariable.nativeElement.value = "";
      this.alertText.class = "alert-danger";
      this.alertText.text = "Please select valid image with png,jpg or jpeg type only !";
      setTimeout(() => {
        this.alertText.text = "";
      }, 5000);
    }
  }

  /**
   * @description Add student on click of Save button and navigate to the details page if valid data entered.
   */
  addStudent() {
    this.submitted = true;
    // this.selection = [];
    window.scroll(0, 0);
    console.log(this.student);
    if (this.student.valid) {
      this.studentService.addStudentData(this.student.value);
      this.alertText.class = "alert-success";
      this.alertText.text = "Student registered successfully !";
      this.router.navigate(['show']);
    } else {
      this.alertText.class = "alert-danger";
      this.alertText.text = "Please enter valid information in the form";
      setTimeout(() => {
        this.alertText.text = "";
      }, 5000);
    }
  }

  /**
   * @description Reset form data
   */
  reset() {
    // this.submitted = true;
    this.student.reset();
  }


}
