import { card, courseListing } from './../../core/courses-list';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  @Input() card: courseListing[];
  constructor() {
    this.card = card
   }
   selectedIndex = 0;
  ngOnInit(): void {
  }
  onPrevClick():void {
    if (this.selectedIndex === 0){
      this.selectedIndex = this.card.length -1;
    }else{
      this.selectedIndex--;
    }
  }
  onNextClick():void {
    if (this.selectedIndex === this.card.length - 1){
      this.selectedIndex = 0;
    }else{
      this.selectedIndex++;
    }
  }
}
