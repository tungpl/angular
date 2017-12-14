import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated
 
})
export class FavoriteComponent {

  @Input('is-favorite')isFavorite: boolean;
  @Output('change') click = new EventEmitter() 

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.click.emit({newValue: this.isFavorite});
  }

}

export interface FavoriteChangedEventArgs {
  newValue: boolean
}
