import { Component } from '@angular/core';
import { Console } from '@angular/core/src/console';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  post = {
    title : "Title",
    isFavorite : true
  }
  //validate the eventArg obj 
  onFavoriteChanged(eventArg: FavoriteChangedEventArgs) {

     console.log('Favorite changed:', eventArg);
      
  }
}
