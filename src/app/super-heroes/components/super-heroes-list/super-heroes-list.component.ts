import { Component, OnInit, Input } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { SuperHero } from '../../models/super-hero.model';
import { SuperHeroesService } from '../../services/super-heroes.service';

@Component({
  selector: 'app-super-heroes-list',
  templateUrl: './super-heroes-list.component.html',
  styleUrls: ['./super-heroes-list.component.scss']
})
export class SuperHeroesListComponent implements OnInit {
  isLoading: boolean = false;
  superHeroes$!: Observable<SuperHero[]>;
  previousSearch! : string;
  searchValue! :string | null;
  nbResult! : number;
  constructor(private superHeroesService : SuperHeroesService) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('previousSearch')){
      this.isLoading = true;
      this.superHeroes$ = this.superHeroesService.getSuperHero(sessionStorage.getItem('previousSearch')).pipe(
        tap ((superHero) => {
          this.isLoading = false
          if(superHero){
            this.nbResult = superHero.length;
            this.searchValue = sessionStorage.getItem('previousSearch');
          }
          else {
            this.nbResult = 0;
          }
        })
      );
    }
  }
  // BAD? NEUTRAL? GOOD
  onSearchChange(searchValue : string){
    this.isLoading = true;
    sessionStorage.setItem('previousSearch', searchValue)
    this.superHeroes$ = this.superHeroesService.getSuperHero(searchValue).pipe(
      tap ((superHero) => {
        this.isLoading = false;
        if(superHero){
          this.nbResult = superHero.length;
          this.searchValue = sessionStorage.getItem('previousSearch');
        }
        else {
          this.nbResult = 0;
        }
      })
    );
  }

}
