import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Project } from "./project";
import { FormGroup, FormControl } from "@angular/forms";


@Component({
  selector: 'app-projects',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  myForm: FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      'title': new FormControl(),
      'date': new FormControl(),
      'role': new FormControl(),
      'sponsor': new FormControl(),
      'url': new FormControl(),
      'description': new FormControl()
    });
  }

  ngOnInit() {}

  onSubmit() {
    //console.log(this.myForm);
    var title = this.myForm.value.title;
    var date = this.myForm.value.date;
    var role = this.myForm.value.role;
    var sponsor = this.myForm.value.sponsor;
    var projectUrl = this.myForm.value.url;
    var description = this.myForm.value.description;
    this.projects.push(new Project(title, date, role, sponsor, projectUrl, description));
    this.myForm.reset();
  }
}
