import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasFComponent } from './peliculas-f.component';

describe('PeliculasFComponent', () => {
  let component: PeliculasFComponent;
  let fixture: ComponentFixture<PeliculasFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeliculasFComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeliculasFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
