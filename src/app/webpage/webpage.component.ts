import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-webpage',
  templateUrl: './webpage.component.html',
  styleUrls: ['./webpage.component.css']
})
export class WebpageComponent implements OnInit {
  bio = "Recent Mechanical Engineering graduate from Washington State University seeking an Junior Software Engineer position.\nLooking to leverage experience designing and fixing web applications using ASP.Net, MVS, jQuery, Angular JS, and HTML during a Software Engineering Internship with DocuSign. Well-prepared to assist in the design of software solutions, troubleshoot web application bugs, and use markup languages for coding. Strong knowledge of web-related technologies such as Web Services, REST, WCF, and JavaScript; basic experience with web technologies SOAP, AJAX, JSON, and XML. "

  constructor() { }

  ngOnInit() {
  }

}
