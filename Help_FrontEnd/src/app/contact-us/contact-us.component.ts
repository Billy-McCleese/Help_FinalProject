import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  name = '' ;
  email = '';
  message = '';

  submitting: boolean = false;

  submitForm() {
    // Perform form submission logic here (e.g., API call, data processing)

    // Disable the submit button to prevent multiple submissions
    this.submitting = true;

    // Simulating an asynchronous operation (e.g., API call) with a delay
    setTimeout(() => {
      // After the operation is completed, reset the form and enable the submit button
      this.name = '';
      this.email = '';
      this.message = '';
      this.submitting = false;
    }, 2000); // Simulated delay of 2 seconds
  }
}