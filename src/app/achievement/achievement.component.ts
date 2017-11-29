import { Component, OnInit } from '@angular/core';
import {Response } from '@angular/http';
import { coursesService} from '../courses.service';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.css']
})
export class AchievementComponent implements OnInit {
  achievements:any[];
  i:number=0;
  constructor(private courseService:coursesService) { }
  ngOnInit() {
  this.getUsers();
  }
getUsers()
{
  this.courseService.getUsersAchive()
  .subscribe(
    (achievements:any[])=>this.achievements=achievements,
    (error)=>console.log(error)
  );
}
}
