import { Component, OnInit } from '@angular/core';

interface workex_edu {
  title: '';
  duration: '';
  description: '';
}

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss'],
})
export class AboutmeComponent implements OnInit {
  constructor() {}

  workex: workex_edu[] = [{ title: '', duration: '', description: '' }];
  education: workex_edu[] = [{ title: '', duration: '', description: '' }];


  workedu = 'work';

  toggleworkedu(val: string) {
    this.workedu = val;
  }

  ngOnInit(): void {}
}
