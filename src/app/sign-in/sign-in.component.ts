import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs/observable/from';
import { coursesService} from '../courses.service';
import { user } from '../shared/user.model';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers:[coursesService]
})
export class SignInComponent implements OnInit {

  constructor(private router: Router,private courseService:coursesService) { }
  user:user;
  ngOnInit() {
  }
  checkEmail(){
      this.courseService.getPasswordByMail()
      .subscribe(
        (user:user)=>this.user=user,
        (error)=>console.log(error)
      );
      if(this.user.password=="1")
      {
        this.router.navigateByUrl('/courses');
      }   
}
}
