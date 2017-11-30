import { Component } from '@angular/core';
import { Console } from '@angular/core/src/console';

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

  onFavoriteChanged() {

     console.log('Favorite changed');
      
  }
}
