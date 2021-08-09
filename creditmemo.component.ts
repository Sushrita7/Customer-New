import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creditmemo',
  templateUrl: './creditmemo.component.html',
  styleUrls: ['./creditmemo.component.css']
})
export class CreditmemoComponent implements OnInit {

  uname:any;
  credit:any;


 
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
     
     this.http.post('http://localhost:3000/creditmemo', { uname: this.uname }).subscribe((data:any) => {
       console.log(data);
       this.credit = data['SOAP:Envelope']['SOAP:Body']['ns0:ZFI_VENDOR_CREDIT_MEMO_KNH.Response']['IT_CREDITMEMO']['item'];
       
       
     })
   }  


}
