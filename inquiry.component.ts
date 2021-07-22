import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent implements OnInit {

  uname:any;
  inquiry:any;
 
   constructor(private http: HttpClient, private router: Router) {
     this.uname = sessionStorage.getItem('uname');
     //alert(this.uname);
     if (this.uname == null) {
       // alert('hello');
       this.router.navigate(['']);
     }
   }
 
   ngOnInit(): void {
     // this.uname = localStorage.getItem('uname');
 
     this.uname = sessionStorage.getItem("uname");
     
     this.http.post('http://localhost:3000/inquiry', { uname: this.uname }).subscribe((data:any) => {
       console.log(data);
       this.inquiry = data['SOAP:Envelope']['SOAP:Body']['ns0:ZSD_KNH_INQUIRY.Response']['IT_FINL']['item'];
       console.log(this.inquiry);
       
     })
   }  

}
