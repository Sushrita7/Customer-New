import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deliveryget',
  templateUrl: './deliveryget.component.html',
  styleUrls: ['./deliveryget.component.css']
})
export class DeliverygetComponent implements OnInit {
 
 uname:any;
 delivery_list:any;

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
    
    this.http.post('http://localhost:3000/delivery', { uname: this.uname }).subscribe((data:any) => {
      console.log(data);
      this.delivery_list = data['SOAP:Envelope']['SOAP:Body']['ns0:ZSD_DELIVERYGETLIST_KNH.Response']['IT_DELIVERY_LIST']['item'];
      console.log(this.delivery_list);
      
    })
  }  }
