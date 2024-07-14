import { Component, OnInit } from '@angular/core';

interface projects {
  name: '';
  description: '';
  techstack: '';
  gitlink: '';
  visitlink: '';
  imagelink:""
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  constructor() {}

  mainprojects: projects[] = [
    {
      name: '',
      description: '',
      techstack: '',
      gitlink: '',
      visitlink: '',
      imagelink:''
    },
    {
      name: '',
      description: '',
      techstack: '',
      gitlink: '',
      visitlink: '',
      imagelink:''
    },
    {
      name: '',
      description: '',
      techstack: '',
      gitlink: '',
      visitlink: '',
      imagelink:''
    },
  ];

  gameprojects: projects[] = [
    {
      name: '',
      description: '',
      techstack: '',
      gitlink: '',
      visitlink: '',
      imagelink:''
    },
    {
      name: '',
      description: '',
      techstack: '',
      gitlink: '',
      visitlink: '',
      imagelink:''
    },
    {
      name: '',
      description: '',
      techstack: '',
      gitlink: '',
      visitlink: '',
      imagelink:''
    },
  ];

  ngOnInit(): void {}
}
