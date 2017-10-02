import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-webpage',
  templateUrl: './webpage.component.html',
  styleUrls: ['./webpage.component.css']
})
export class WebpageComponent implements OnInit {
  bio = "Recent Mechanical Engineering graduate from Washington State University seeking a Junior Software Engineer position. Looking to leverage experience designing and fixing web applications using Java, JavaScript, Spark, Angular JS, and AWS during a Software Engineering Internship with DocuSign as well as completed the Java/Android track at Epicodus, a 20-week full time coding school on Full Stack Web Development. Well-prepared to assist in the design of software solutions, troubleshoot web application bugs, and use markup languages for coding. Strong knowledge of web-related technologies such as Web Services, REST, Gradle, and node.js; basic experience with web technologies SOAP, AJAX, JSON, and XML."

  constructor() { }

  ngOnInit() {
  }

}
