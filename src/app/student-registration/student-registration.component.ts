import { Component, OnInit } from '@angular/core';
import { Institution } from '../create-new-user/create-new-user.component';
import { AdminService } from '../service/data/admin.service';
import { InstituteService } from '../service/data/institute.service';

export class Student{

  constructor(
    public studentId : Number,
    public studentName: String,
    public contactNo :Number,
    public email : String ,
    public optedCourse : Number,
    public address : String,
    public pincode : Number,
    public subcription : Number,
    public dateOfBirth : Date,
    public username : String ,
    public status: boolean 
    ){
      
    }

}

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {

  student : Student;
  //institution:Institution;
  selectedFile: File;
  message : String;
  constructor(private instituteService: InstituteService) { }

  ngOnInit() {
     this.student=new Student(-1,null,null,null,null,null,null,null,null,null,null);
  }

  onFileChanged(event){
    this.selectedFile=event.target.files[0];
    // this.institution.image=event.target.files[0];
    console.log(this.selectedFile.name+this.selectedFile.type)
  }

  registerInstution(){
    var uploadImg = new FormData();
    // uploadImg.append('myfile',this.selectedFile,this.selectedFile.name);
    // uploadImg.append('jsondata',JSON.stringify(this.institution));
    // this.institution.image=uploadImg
    // uploadImg.append('inst_id',this.institution.institutionId);
    // this.institution.image = new ImageModel(this.selectedFile.name,this.selectedFile);
    //console.log(JSON.stringify(this.institution))
    this.instituteService.registerStudent(this.student).subscribe(
      data=>{
        console.log(data);
        this.message = 'Login credentials are mailed to the registered email Id'
        },
        error => {
          //console.log(this.institution.errorMessage);
          console.log("error         "+error.error.message)
          this.message = error.error.message
        }
    )
      }

}
