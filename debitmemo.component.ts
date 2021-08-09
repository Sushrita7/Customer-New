import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-debitmemo',
  templateUrl: './debitmemo.component.html',
  styleUrls: ['./debitmemo.component.css']
})
export class DebitmemoComponent implements OnInit {
  uname:any;
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
     
     this.http.post('http://localhost:3000/debitmemo', { uname: this.uname }).subscribe((data:any) => {
       console.log(data);
       this.debit = data['SOAP:Envelope']['SOAP:Body']['ns0:ZFI_VENDOR_DEBIT_MEMO_KNH.Response']['IT_DEBITMEMO']['item'];
       
       
     })
   }  


}
