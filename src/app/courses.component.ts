
import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    /*template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses" >
                {{ course }}
            </li>
        </ul>
    `*/
    /*template: `
        <img [src]="imageUrl" />
        <table>
            <tr>
                <td [attr.colspan]="colSpan"></td>
            </tr>
        </table>
    `*/
    /*template: `
        <button class="btn btn-primary" [class.active]="isActive" >Save</button>
    `*/
    /*template: `
        <button [style.backgroudColor]="isActive ? 'blue' : 'white'" >Save</button>
    `*/
    /*template: `
        <div (click)="onDivClicked()">
            <button (click)="onSave($event)" >Save</button>
        </div>
    `*/
    /*template: `
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
    `*/
    template: `
        {{ course.title | uppercase }} <br/>
        {{ course.students | number }} <br/>
        {{ course.rating | number:'1.2-2' }} <br/>
        {{ course.price | currency:'EUR':'symbol':'3.2-2' }} <br/>
        {{ course.releaseDate | date:'mediumDate' }} <br/>
    `
})
export class CoursesComponent{
    /*title = 'List of courses';
    courses;
    imageUrl = "";
    colSpan = 2;

    isActive=true;

    email = "me@example.com";*/



    /*constructor(service: CoursesService){
        this.courses = service.getCourses();
    }

    onSave($event){
        $event.stopPropagation();
        console.log("Button was clicked", $event);
    }

    onDivClicked(){
        console.log("Div was clicked");
    }

    onKeyUp(){
        console.log(this.email);
    }*/

    course = {
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    }
}