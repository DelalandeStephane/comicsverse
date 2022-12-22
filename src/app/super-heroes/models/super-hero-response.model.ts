import { SuperHero } from "./super-hero.model"

export class SuperHeroResponse {
    response!:string
    "results-for"!:string
    results! : SuperHero[]
  }