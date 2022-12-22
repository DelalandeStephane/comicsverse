import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { SuperHero } from '../models/super-hero.model';
import { SuperHeroResponse } from '../models/super-hero-response.model';
import { environment } from 'src/environments/environment';
@Injectable()


export class SuperHeroesService {

  constructor(private http : HttpClient) { }

   getRandomIntInclusive(min : number, max : number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }



  getSuperHero(searchValue : string | null) : Observable<SuperHero[]> {
    return this.http.get<SuperHeroResponse>(`${environment.baseUrl}/${searchValue}`).pipe(
      map((data: SuperHeroResponse ) => data.results)
    )
  }

  getSuperHeroById(searchValue : string) : Observable<SuperHero> {

    if(searchValue ==="random") {
      const searchValue = this.getRandomIntInclusive(1,731);
      return this.http.get<SuperHero>(`${environment.baseUrl}/${searchValue}`)
    }
    return this.http.get<SuperHero>(`${environment.baseUrl}/${searchValue}`)
  }

}
