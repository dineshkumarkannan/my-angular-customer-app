import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor() { }
  skill = [];

  ngOnInit() {
    this.getSkillsDetails(this.about_me.Skills);
  }

  getSkillsDetails(skills : string):void {
      this.skill = skills.split(',');
  }

  public about_me = {
    "name": "Dinesh Kumar. K",
    "first-name": "Dinesh",
    "last-name": "Kumar",
    "phone1": "+91-99420-80003",
    "phone2": "+91-97898-00321",
    "mail": "dineshmail.kannan@gmail.com",
    "address": "Chennai",
    "dob" : "23-08-1993",
    "edu" : "BE(CSE)-2015",
    "college": "Nandha College Of Technology, Erode",
    "designation": "Software Developer",
    "location": "Chennai",
    "linked_id": "https://www.linkedin.com/in/dinesh-kumar-bab864130",
    "Company1": {
      "name":"Gatik Business Solutions",
      "location": "Bangalore",
      "role": "Web Developer",
      "duration": "March 2016 - April 2017"
    },
    "Company2": {
      "name": "Venba Information Technology",
      "location": "Chennai",
      "role": "Software Developer",
      "duration": "July 2017 - Present"
    },
    "Summar": "",
    "Project1": "",
    "Project2": "",
    "Skills": "Angular(2 & 4), AngularJS, Javascript, TypeScript, IONIC, HTML5, CSS3, OOP's Concepts, Rest API, Node JS, Core Java, ES6, PHP"
  }

}
