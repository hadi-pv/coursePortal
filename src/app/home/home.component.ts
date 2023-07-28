import { Component, OnDestroy, OnInit } from '@angular/core';
import {faBookReader} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit,OnDestroy{
  count1: number = 0;
  count2: number = 0;
  count3: number = 0;
  count4: number = 0;
  interval: any;
  faBookReader=faBookReader;

  ngOnInit() {
    this.interval = setInterval(() => {
      this.increment();
    }, 10);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  increment(): void {
    if(this.count1<20){
      this.count1++;
    }
    if(this.count2<500){
      this.count2++;
    }
    if(this.count3<150){
      this.count3++;
    }
    if(this.count4<5){
      this.count4++;
    }
  }
}
