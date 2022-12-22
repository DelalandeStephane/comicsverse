import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { SuperHero } from '../../models/super-hero.model';
import { SuperHeroesService } from '../../services/super-heroes.service';

@Component({
  selector: 'app-super-hero-page',
  templateUrl: './super-hero-page.component.html',
  styleUrls: ['./super-hero-page.component.scss']
})
export class SuperHeroPageComponent implements OnInit {
  isLoading: boolean = true;
  superHero$!:  Observable<SuperHero>;
  powerList! : {};
  constructor(
    private route: ActivatedRoute,
    private router : Router,
     private superHeroesService : SuperHeroesService
     )  { }

  ngOnInit(): void {
      const superHeroId = this.route.snapshot.params['id'];
      this.superHero$ = this.superHeroesService.getSuperHeroById(superHeroId).pipe(
        tap((hero) => {
          this.powerList = hero.powerstats;
          this.isLoading = false;
        })
      );
  }

  onRedirectBack() {
    this.router.navigateByUrl('');
  }
}
