import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginv',
  templateUrl: './loginv.component.html',
  styleUrls: ['./loginv.component.css']
})
export class LoginvComponent implements OnInit {

  uname:any;
  pwd:any;
  name:any;
  constructor(private http:HttpClient,private router:Router) { }
  
  ngOnInit(): void {
    
  }
  getresult(f:any){

    console.log(f);

    // this.uname=f.form.value[1];
    // this.pwd=f.form.value[0];
    // console.log(this.uname+"      "+this.pwd);
    console.log(f.value);
    this.http.post('http://localhost:3000/loginv',f.value).subscribe((data:any)=>{
      console.log(data);

      this.name=data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_VENDOR_LOGIN_KNH.Response'];
      if(this.name !='invalid'){
        this.uname=f.value.uname;
        console.log(this.uname);
        sessionStorage.setItem('uname',this.uname);
      
        // alert("Welcome " + this.name);
        this.router.navigate(['/dashboardv']);
        
      } 
      else{
        alert("Invalid User");
        
    
      }
    });
  }


}
