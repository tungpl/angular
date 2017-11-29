import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ getTitle() }}</h2>
        <h2 [textContent] = "title"></h2>
        <ul>
            <li *ngFor = "let course of courses">
                {{course}}
            </li>
        </ul>  
        <img src = {{imgUrl}} />
        <img [src] = "imgUrl" />  
        <table>
            <tr>
                <td [attr.colspan] = "colSpan"></td>
            </tr>
        </table>  
        <div (click) = "onDivClicked()">
            <button class="btn btn-primary" [class.active] = "isActive" 
            [style.backgroundColor] = "isActive? 'blue': 'white'"
            (click) = "onSave($event)"
            >Save</button>
        </div>

        <input (keyup) = "onKeyUp($event)" />
        <input [(ngModel)] = "email" (keyup.enter) = "onEnter()" />       
        <div>
            {{course.title | uppercase }} <br/>
            {{course.rating | number: '1.1-1'}} <br/>
            {{course.students | number }} <br/>
            {{course.price | currency: 'HKD': true: '3.2-2'}} <br/>
            {{course.releaseDate| date:'dd-MM-yyyy'}}
        </div>    
        
        {{ text | summary: 10}}  
        
        <span  class = "glyphicon" [class.glyphicon-star] = "isFavorite" [class.glyphicon-star-empty] = "!isFavorite" (click)= starOnClicked()></span>
        ` 
})
export class CoursesComponent {

    title = 'List of Courses';
    courses;
    imgUrl = 'http://lorempixel.com/400/200';
    colSpan = 2;  
    isActive = true;
    email = "tung.fpt@gmail.com";

    text = `Lorem Ipsum is simply dummy sentences Lorem Ipsum is simply dummy sentencesLorem Ipsum is simply dummy sentencesLorem Ipsum is simply dummy sentencesLorem Ipsum is simply dummy sentencesLorem Ipsum is simply dummy sentencesLorem Ipsum is simply dummy sentencesLorem Ipsum is simply dummy sentencesLorem Ipsum is simply dummy sentencesLorem Ipsum is simply dummy sentencesLorem Ipsum is simply dummy sentencesLorem Ipsum is simply dummy sentences
    `
    isFavorite = false;

    course = {
        title: "The complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    };
    
    getTitle() {
        return this.title;
    }

    constructor (coursesService: CoursesService) {

        this.courses = coursesService.getCourses();
    }

    onSave($event) {
        $event.stopPropagation();
        console.log ("Button was clicked", $event);
    }

    onDivClicked() {
        console.log ("Div was clicked");
    }

    onKeyUp($event) {
        if($event.keyCode === 13){
            console.log("Enter was pressed");
            console.log($event.target.value);
        } 
    }

    onEnter(email) {
        console.log("Enter was pressed");
        console.log(this.email);

    }

    starOnClicked(){

        this.isFavorite = !this.isFavorite;

    }
}