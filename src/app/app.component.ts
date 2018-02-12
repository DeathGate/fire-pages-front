import { FavoriteChangedEventArgs } from './favorite/favorite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*post={
    title: 'Angular app',
    isFavorite: true
  }

  onFavoriteChanged(eventArgs : FavoriteChangedEventArgs){
    console.log("Favorite changed: " + eventArgs.newValue );
  }*/

  //courses = [1,2];

  //viewMode = 'somethingElse';

  /*courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
  ];

  onAdd(){
    this.courses.push({id: 4, name: 'course4'});
  }

  onRemove(course){
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }*/

  /*courses;

  loadCourses(){
    this.courses = [
      {id: 1, name: 'course1'},
      {id: 2, name: 'course2'},
      {id: 3, name: 'course3'}
    ];
  }

  trackCourse(index, course){
    return course ? course.id : undefined;
  }*/

  //canSave = true;

  task = {
    title: 'Review applications',
    assignee: {
      name: 'John Smith'
    }
  }
}
