import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperHeroPageComponent } from './super-hero-page.component';

describe('SuperHeroPageComponent', () => {
  let component: SuperHeroPageComponent;
  let fixture: ComponentFixture<SuperHeroPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperHeroPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperHeroPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
