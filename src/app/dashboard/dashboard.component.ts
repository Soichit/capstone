import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx"; 


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private name: string

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => this.name = param['name']
    );
   }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
