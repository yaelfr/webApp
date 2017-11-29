import { Component, OnInit } from '@angular/core';
import {Response } from '@angular/http';
import { coursesService} from '../courses.service';
import { courses } from '../shared/courses.model';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers:[coursesService]
})
export class CoursesComponent implements OnInit {
   courses:any[];
  constructor(private courseService:coursesService) { }

  ngOnInit() {
    this.logCourses();
  }
  logCourses(){
    this.courseService.getCourses()
    .subscribe(
      (courses:courses[])=>this.courses=courses,
      (error)=>console.log(error)
    );
   }
 


}
