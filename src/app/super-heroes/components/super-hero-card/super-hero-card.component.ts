import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SuperHero } from '../../models/super-hero.model';

@Component({
  selector: 'app-super-hero-card',
  templateUrl: './super-hero-card.component.html',
  styleUrls: ['./super-hero-card.component.scss']
})
export class SuperHeroCardComponent implements OnInit {

  @Input() superHero ! : SuperHero;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  OnSuperHeroRedirect(){
    
    this.router.navigateByUrl(`superhero/${this.superHero.id}`);

  }

}
