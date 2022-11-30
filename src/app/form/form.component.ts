import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public name = new FormControl('');
  public lastName = new FormControl('');

  constructor() { }

  ngOnInit(): void { }

  sendFormData() {
    console.log(this.name.value, this.lastName.value)
    this.name.reset()
    this.lastName.reset()
  }
}
