import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/data/admin.service';

export class Institution{

  constructor(
    public institutionId : Number,
    public institutionName: String,
    public institutionType :String,
    public email : String ,
    public contactNo : Number,
    public address : String,
    public pincode : Number,
    public subcription : Number,
    public copName : String,
    public copPhone : Number,
    public logo : any,
    public username : String ,
    // public defaultPassword : String ,
    // public errorMessage:String,
    public maxInstLogin : Number,
    public maxStudentLogin : Number,
    public status: boolean 
    // public encodedPassword,String
    ){
      
    }

}

@Component({
  selector: 'app-create-new-user',
  templateUrl: './create-new-user.component.html',
  styleUrls: ['./create-new-user.component.css']
})
export class CreateNewUserComponent implements OnInit {
 
  institution:Institution;
  selectedFile: File;
  message : String;
  constructor(private adminService: AdminService) { }

  ngOnInit() {
     this.institution=new Institution(-1,'','','',null,'',null,null,'',null,null,null,null,null,null);
    //this.institution=new Institution('','',0,'',0,0,'',0);
  }

  onFileChanged(event){
    this.selectedFile=event.target.files[0];
    // this.institution.image=event.target.files[0];
    console.log(this.selectedFile.name+this.selectedFile.type)
  }

  registerInstution(){
    var uploadImg = new FormData();
    uploadImg.append('myfile',this.selectedFile,this.selectedFile.name);
    uploadImg.append('jsondata',JSON.stringify(this.institution));
    // this.institution.image=uploadImg
    // uploadImg.append('inst_id',this.institution.institutionId);
    // this.institution.image = new ImageModel(this.selectedFile.name,this.selectedFile);
    console.log(JSON.stringify(this.institution))
    this.adminService.createNewUser(this.institution.institutionName,uploadImg).subscribe(
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
