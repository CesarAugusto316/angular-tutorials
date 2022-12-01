import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public userProfile = this.fb.group({
    name: ['', Validators.required],
    lastName: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userProfile.valueChanges.subscribe(values => {
      console.log(values);
      console.log('is valid:', this.userProfile.valid);
    });
  }

  sendFormData() {
    console.log(this.userProfile.value);
    this.userProfile.reset({ name: '', lastName: '' });
  }
}
