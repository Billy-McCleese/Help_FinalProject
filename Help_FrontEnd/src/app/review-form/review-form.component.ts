import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Review } from '../review';
import { ApiService } from '../api.service';
import { Result } from '../real-estate';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnChanges {
  @Input() selectedProperty?: Result;
  reviewForm: FormGroup;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedProperty']) {
      this.reviewForm.patchValue({
        CompleteAddress: this.selectedProperty?.permalink,
        PropertyAdress: this.selectedProperty?.location.address.line,
        PropertyCity: this.selectedProperty?.location.address.city,
        PropertyState: this.selectedProperty?.location.address.state,
        PropertyZip: this.selectedProperty?.location.address.postal_code
      });
    }
  }

  private url = 'https://localhost:7105/api/'; // Replace with your API URL

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private apiService: ApiService) {

    this.reviewForm =this.formBuilder.group({
      CompleteAddress: [this.selectedProperty?.permalink],
      PropertyAdress: [this.selectedProperty?.location.address.line],
      PropertyCity: [this.selectedProperty?.location.address.city],
      PropertyState: [this.selectedProperty?.location.address.state],
      PropertyZip: [this.selectedProperty?.location.address.postal_code],
      Title: ["", Validators.required],
      Detail: ["", Validators.required]
    })
  }


  onSubmit() {
     if (this.reviewForm.valid) {
      const review: Review = this.reviewForm.value;
      console.log(review);
      console.log(this.selectedProperty?.location.address.line)
      
      this.apiService.createReview(review).subscribe((response: Review) => {
        // Handle response if needed
        console.log(response);
        this.reviewForm.reset();
      });
    }
  }
}
