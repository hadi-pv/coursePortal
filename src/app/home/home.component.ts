import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit,OnDestroy{
  count: number = 0;
  interval: any;

  ngOnInit() {
    this.interval = setInterval(() => {
      this.increment();
    }, 1);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  increment(): void {
    if(this.count<500){
      this.count++;
    }
  }
}
