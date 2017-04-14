import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-builder',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {

  progress: number;
  show: boolean
  constructor() { }

  ngOnInit() {
    this.progress = 55;
    this.show = false;
  }

  onShow() {
    this.show = true;
  }

  onDownload() {

  }
}
