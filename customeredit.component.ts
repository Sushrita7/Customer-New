import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customeredit',
  templateUrl: './customeredit.component.html',
  styleUrls: ['./customeredit.component.css']
})
export class CustomereditComponent implements OnInit {
  fname:any;
  lname:any;
  city:any;
  country:any;
  state:any;
  pincode:any;
  street:any;
  mobile:any;
  uname:any;


  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.fname = sessionStorage.getItem("fname");
    this.lname = sessionStorage.getItem("lname");
    this.city = sessionStorage.getItem("city");
    this.street = sessionStorage.getItem("street");
    this.state = sessionStorage.getItem("state");
    this.pincode = sessionStorage.getItem("pincode");
    this.mobile = sessionStorage.getItem("mobile");
    this.country = sessionStorage.getItem("country");
  }

  update() {
    this.uname = sessionStorage.getItem('uname');
    var cust_details = {
      uname: this.uname, fname: this.fname, lname: this.lname,
      street: this.street, city: this.city, state: this.state,
      pincode: this.pincode, country: this.country, mobile: this.mobile
    }
    this.http.post('http://localhost:3000/custedit', cust_details).subscribe((data:any) => {
      this.fname = data['SOAP:Envelope']['SOAP:Body']['ns0:ZSD_CUSTPROFILE_EDIT_KNH.Response'].F_NAME._text;
      this.lname = data['SOAP:Envelope']['SOAP:Body']['ns0:ZSD_CUSTPROFILE_EDIT_KNH.Response'].L_NAME._text;
      this.city = data['SOAP:Envelope']['SOAP:Body']['ns0:ZSD_CUSTPROFILE_EDIT_KNH.Response'].CITY._text;
      this.country = data['SOAP:Envelope']['SOAP:Body']['ns0:ZSD_CUSTPROFILE_EDIT_KNH.Response'].COUNTRY._text;
      this.state = data['SOAP:Envelope']['SOAP:Body']['ns0:ZSD_CUSTPROFILE_EDIT_KNH.Response'].STATE._text;
      this.street = data['SOAP:Envelope']['SOAP:Body']['ns0:ZSD_CUSTPROFILE_EDIT_KNH.Response'].STREET._text;
      this.mobile = data['SOAP:Envelope']['SOAP:Body']['ns0:ZSD_CUSTPROFILE_EDIT_KNH.Response'].MOBILE._text;
      this.pincode = data['SOAP:Envelope']['SOAP:Body']['ns0:ZSD_CUSTPROFILE_EDIT_KNH.Response'].PIN_CODE._text;

    })
    this.router.navigate(['/customerdetail']);
  }

}
