import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss'],
})
export class AboutmeComponent implements OnInit {
  constructor() {}

  workexperiences = [
    '../../assets/placeholder.jpg',
    '../../assets/placeholder.jpg',
    '../../assets/placeholder.jpg',
    '../../assets/placeholder.jpg',
  ];

  workedu = 'work';

  toggleworkedu(val: string) {
    this.workedu = val;
  }

  ngOnInit(): void {}
}
