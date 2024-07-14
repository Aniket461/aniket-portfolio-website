import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(public http: HttpClient, public snackbar: MatSnackBar) {}

  formObject = {
    name: '',
    email: '',
    contactNo: '',
    message: '',
  };

  submitContactForm() {
    let url =
      'https://script.google.com/macros/s/AKfycbw0yjrLGM2tWZzkJtnx9sPFqAFPV3SXA0iD3Q04bl5jXzmDAcwWvuLmh1mdjJdJqEVR/exec';

    console.log(this.formObject);
    let bodyString = `
    <div>
    <span><b>Name:</b> ${this.formObject.name}</span>
    <span><b>email:</b> ${this.formObject.email}</span>
    <span><b>contact no:</b> ${this.formObject.contactNo}</span>
    <span><b>Message:</b> ${this.formObject.message}</span>
    </div>
    `;

    this.http.post(url, JSON.stringify(this.formObject)).subscribe((e: any) => {
      if (e.message) {
        this.snackbar
          .open(
            'Thank you for reaching out, I will rever as soon as possible!!',
            'Dismiss',
            {
              duration: 2000,
              verticalPosition: 'top',
              horizontalPosition: 'center',
            }
          )
          .afterDismissed()
          .subscribe((e) => {
            window.location.href = '/contact';
          });
      }
    });
  }

  ngOnInit(): void {}
}
