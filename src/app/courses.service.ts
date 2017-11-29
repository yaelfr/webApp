import {Headers,Http,Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/Rx'
@Injectable()
export class coursesService{
    constructor(private http:Http){}
    getCourses()
    {
     return this.http.get('http://localhost:55199/api/courses')
     .map(
         (response:Response)=>{
             const data=response.json();
             return data;
         }
     );
    }
    getUsersAchive()
    {
     return this.http.get('http://localhost:55199/api/users')
     .map(
         (response:Response)=>{
             const data=response.json();
             return data;
         }
     );
    }
    getPasswordByMail()
    {
        return this.http.get('http://localhost:55199/api/users/1')
        .map(
            (response:Response)=>{
                const data=response.json();
                return data;
            }
     );
    }
}

