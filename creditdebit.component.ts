import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creditdebit',
  templateUrl: './creditdebit.component.html',
  styleUrls: ['./creditdebit.component.css']
})
export class CreditdebitComponent implements OnInit {

  uname:any;
  credit:any;
  debit:any;

 
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
     
     this.http.post('http://localhost:3000/creditdebit', { uname: this.uname }).subscribe((data:any) => {
       console.log(data);
       this.credit = data['SOAP:Envelope']['SOAP:Body']['ns0:ZFI_CREDIT_DEBITKNH.Response']['IT_CREDIT']['item'];
       //console.log(this.credit);
       this. debit = data['SOAP:Envelope']['SOAP:Body']['ns0:ZFI_CREDIT_DEBITKNH.Response']['IT_DEBIT']['item'];
       
     })
   }  


}
