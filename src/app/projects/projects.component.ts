import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Project } from "./project";

@Component({
  selector: 'app-projects',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  private projects: Project[] = [];


  constructor() { }

  ngOnInit() {
    //this.projects = new Projects();
    this.projects.push(new Project("Project 1", "No sponsor", "Project Manager", "This was my first project..."))
  }
}
