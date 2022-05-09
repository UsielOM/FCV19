import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestabasicaComponent } from './encuestabasica.component';

describe('EncuestabasicaComponent', () => {
  let component: EncuestabasicaComponent;
  let fixture: ComponentFixture<EncuestabasicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncuestabasicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestabasicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
