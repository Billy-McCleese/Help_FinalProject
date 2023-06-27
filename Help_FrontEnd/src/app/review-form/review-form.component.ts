import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from '../review';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent {
  reviewForm: FormGroup;

  private url = 'https://localhost:7105/api/'; // Replace with your API URL

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private apiService: ApiService) {
    this.reviewForm =this.formBuilder.group({
      reviewTitle: ["", Validators.required],
      reviewDetails: ["", Validators.required]
    })
  }


  createReview(review: Review): Observable<Review> {
    const url = `${this.url}/Review`;
    return this.http.post<Review>(url, review);
  }

  onSubmit() {
    if (this.reviewForm.valid) {
      const review: Review = this.reviewForm.value;
      console.log(review);
      
      // handle your user data here...
      this.apiService.createReview(review)

      this.reviewForm.reset();
    };
  }
}
