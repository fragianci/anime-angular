import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'anime-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.scss'
})
export class SearchbarComponent {
  searchText: string = '';
  @Output() searchTextEmitter: EventEmitter<string> = new EventEmitter<string>();

  search() {
    this.searchTextEmitter.emit(this.searchText);
  }

}
