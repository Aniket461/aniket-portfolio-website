import { Component, OnInit } from '@angular/core';

interface education {
  title: String;
  duration: String;
  degree: String;
  description: String;
}

interface workex {
  companyname: String;
  duration: String;
  description: String;
  city: String;
  country: String;
  role: String;
}

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss'],
})
export class AboutmeComponent implements OnInit {
  constructor() {}

  workex: workex[] = [
    {
      companyname: 'Insiders Technologies GMBH',
      duration: '01/04/2024 - Present',
      description: `Actively contributing to the transformation of a desktop application into a web-based solution using C# and Angular
       • Collaborating closely with cross-functional teams including software engineers, UX/UI designers, and
      quality assurance analysts to deliver high-quality web applications that met client requirements and
      exceeded performance expectations`,
      city: 'Kaiserslautern',
      country: 'Germany',
      role: 'Working Student - Product Development',
    },
    {
      companyname: 'Fraunhofer ITWM',
      duration: '01/12/2022 - 31/03/2024',
      description: `Developed an automated translation program at Fraunhofer ITWM, responsible for extracting medical
      terms from a data model and translating them into three languages, facilitating cross-language
      communication. Thus, building an in-house dictionary for efficient terminology management.
      • Implemented an export functionality within the application "DECIDE", enabling users to convert XMLbased patient case data into easily readable Excel files, enhancing usability and data accessibility.
      • Enhanced the application's functionality by integrating a visual component, allowing users to visualize
      patient cases in a tabular format with customizable features, improving data interpretation and user
      experience.
      • Contributed to the success of the project DECIDE, which was awarded the first prize in a competition
      for "digital locations in a land of ideas," showcasing the impact and innovation of the developed
      application.`,
      city: 'Kaiserslautern',
      country: 'Germany',
      role: 'Student Research Assistant',
    },
    {
      companyname: 'Larson & Toubro Infotech',
      duration: '28/08/2020 - 28/08/2022',
      description: `Developed and maintained Asp.Net based Web Applications for an Insurance Company.
      • Successfully integrated new Personal Insurance policies from scratch to existing applications.
      • Worked on analyzing and securing applications from Cross-site scripting and SQL injection.
      • Key Achievements:- Won Batch Topper and Best project Team awards during the training period.`,
      city: 'Mumbai',
      country: 'India',
      role: 'Engineer - Cloud Services and Software',
    },
    {
      companyname: 'Dream Team Digital Creatives',
      duration: '01/02/2018 - 01/05/2018',
      description: `Created the layout for the company's face website.
      • Coded the website from scratch using HTML, CSS, Javascript and Google APIs`,
      city: 'Mumbai',
      country: 'India',
      role: 'Web Developer',
    },
  ];
  education: education[] = [
    {
      title:
        'Rheinland-Pfälzische Technische Universität Kaiserslautern-Landau',
      duration: 'October 2022 - Present',
      degree: 'Masters in Computer Science',
      description: '',
    },
    {
      title: 'Thadomal Shahani Engineering College',
      degree: 'Bachelors of Engineering in Information Technology',
      duration: 'August 2016 - June 2020',
      description: '',
    },
    {
      title: 'Bhavan\'s College',
      degree: 'Higher Secondary School Certificate',
      duration: 'August 2014 - June 2016',
      description: '',
    },
  ];

  workedu = 'work';

  toggleworkedu(val: string) {
    this.workedu = val;
  }

  ngOnInit(): void {}
}
