import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor( public http:HttpClient) { }

   formObject = {
    name:'',
    email:'',
    contactNo:'',
    message:'',
  }

  submitContactForm(){


    let url = 'https://script.google.com/macros/s/AKfycbxLi1asGz7vspPkN9T2W5U657D_WB_JcP8Sy5x6_Kc3UW5OVTsvcO_bvYDg0mCNzBLu/exec';


    console.log(this.formObject);
    let bodyString = `
    <div>
    <span><b>Name:</b> ${this.formObject.name}</span>
    <span><b>email:</b> ${this.formObject.email}</span>
    <span><b>contact no:</b> ${this.formObject.contactNo}</span>
    <span><b>Message:</b> ${this.formObject.message}</span>
    </div>
    `


    this.http.post(url,JSON.stringify(this.formObject)).subscribe((e)=>{
      console.log(e);
    })


    // let link = "mailto:surveaniket461@gmail.com" + "&subject=" + escape("Contact Form from PortFolio Website") + "&body=" + escape(bodyString);
    // let el =  document.createElement('a');
    // el.setAttribute('href',link);
    // el.click();
  }

  ngOnInit(): void {
  }

}
