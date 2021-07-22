import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salesorderdata',
  templateUrl: './salesorderdata.component.html',
  styleUrls: ['./salesorderdata.component.css']
})
export class SalesorderdataComponent implements OnInit {

  uname:any;
  sales:any;
 
   constructor(private http: HttpClient, private router: Router) {
     this.uname = sessionStorage.getItem('uname');
    //  alert(this.uname);
     if (this.uname == null) {
       // alert('hello');
       this.router.navigate(['']);
     }
   }
 
   ngOnInit(): void {
     // this.uname = localStorage.getItem('uname');
 
     this.uname = sessionStorage.getItem("uname");
     
     this.http.post('http://localhost:3000/salesorder', { uname: this.uname }).subscribe((data:any) => {
       console.log(data);
       this.sales = data['SOAP:Envelope']['SOAP:Body']['ns0:ZSD_SALESORDERGETLIST_KNH.Response']['E_SALESORDER']['item'];
       console.log(this.sales);
       
     })
   } 

}
