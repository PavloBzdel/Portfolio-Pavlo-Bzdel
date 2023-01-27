import { card, projectListing } from './../../core/projects-list';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @Input() card: projectListing[];
  constructor() {
    this.card = card;
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
