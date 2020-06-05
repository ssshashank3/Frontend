import { Component, OnInit } from '@angular/core';
import { Institution } from '../create-new-user/create-new-user.component'
import { AdminService } from '../service/data/admin.service';


@Component({
  selector: 'app-modify-user',
  templateUrl: './modify-user.component.html',
  styleUrls: ['./modify-user.component.css']
})
export class ModifyUserComponent implements OnInit {
  institution : Institution[]
  // startIndex = 0;
  // endIndex = 10;
  pageNo : number=0;
  flag:boolean=false;
  totalRecords:number;
  page:number=1
  id : number;
  message : String = null;
  institutionName : string;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.institution=[new Institution(-1,'','','',null,'',null,null,'',null,null,null,null,null,null)]
    this.fetchAllInstitution();
    

  }
modifyStatus(inst,status){
// this.institution=inst;
  console.log("inst "+ inst)
  this.id = inst.institutionId
  console.log("id  "+this.id)
this.adminService.modifyStatus(this.id,status).subscribe(
  response=>{
    console.log(response)
    this.message = 'Status updates successfully'
    window.location.reload();
    

  }
)
}



  fetchAllInstitution(){
    this.adminService.fetchAllInstitution().subscribe(
      response => {
        // this.institution = response;
        this.institution = response;
      this.totalRecords=response.length;
      console.log(typeof this.totalRecords)
      // this.getArrayFromNumber(this.length)
    },
    error => {
      //console.log(this.institution.errorMessage);
      console.log("error         "+error.error.message)
      this.message = error.error.message
    }
    )
  }

  search(){
    if(this.institutionName != ""){
      this.institution = this.institution.filter(res =>{
        return res.institutionName.toLocaleLowerCase().match(this.institutionName.toLocaleLowerCase())});
    }else if (this.institutionName == ""){
      this.ngOnInit();
    }

  }

}
