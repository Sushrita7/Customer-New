import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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
    this.http.post('http://localhost:3000/login',f.value).subscribe((data:any)=>{
      console.log(data);

      this.name=data['SOAP:Envelope']['SOAP:Body']['ns0:ZSD_LOGINCUST_KNH.Response'].E_NAME._text;
      if(this.name !='invalid'){
        this.uname=f.value.uname;
        console.log(this.uname);
        sessionStorage.setItem('uname',this.uname);
      
        // alert("Welcome " + this.name);
        this.router.navigate(['/dashboard']);
        
      } 
      else{
        alert("Invalid User");
        
    
      }
    });
  }

}
