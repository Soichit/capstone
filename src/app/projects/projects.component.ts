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
  private projects: Project[] = [];
  myForm: FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      'name': new FormControl(),
      'sponsor': new FormControl(),
      'role': new FormControl(),
      'description': new FormControl()
    });
  }

  ngOnInit() {
    //this.projects = new Projects();
    //this.projects.push(new Project("Example Project 1", "No sponsor", "Project Manager", "This was my first project..."))
  }

  onSubmit() {
    console.log(this.myForm);
    console.log(this.myForm.value);
    console.log(this.myForm.value.name);
    var name = this.myForm.value.name;
    var sponsor = this.myForm.value.sponsor;
    var role = this.myForm.value.role;
    var description = this.myForm.value.description;
    this.projects.push(new Project(name, sponsor, role, description));
    this.myForm.reset();
  }
}
