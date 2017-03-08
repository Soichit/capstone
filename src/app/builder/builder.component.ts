import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-builder',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {

  private progress: number;
  private show: boolean
  constructor() { }

  ngOnInit() {
    this.progress = 55;
    this.show = false;
  }

  onClick() {
    this.show = true;
  }

}
