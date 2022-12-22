import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})

export class SearchFormComponent implements OnInit {

  @Output() getNewHeroesList = new EventEmitter<string>();
  searchValue! : string;
  constructor() { }

  ngOnInit(): void {
  }

  onSearchSubmit(){
    this.getNewHeroesList.emit(this.searchValue);
  }

}
