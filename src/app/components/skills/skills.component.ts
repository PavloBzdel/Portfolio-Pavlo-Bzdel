import { card, skillsListing } from './../../core/skills-list';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  card: skillsListing[];
  constructor() {
    this.card = card;
  }

  ngOnInit(): void {}
}
