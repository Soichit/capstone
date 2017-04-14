import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Work } from "./work";

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  works: Work[] = [];
  myForm: FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      'company': new FormControl(),
      'title': new FormControl(),
      'start': new FormControl(),
      'end': new FormControl(),
      'description': new FormControl()
    });
  }

  ngOnInit() {}

  onSubmit() {
    //console.log(this.myForm);
    var company = this.myForm.value.company;
    var title = this.myForm.value.title;
    var start = this.myForm.value.start;
    var end = this.myForm.value.end;
    var description = this.myForm.value.description;
    this.works.push(new Work(company, title, start, end, description));
    this.myForm.reset();
  }
}