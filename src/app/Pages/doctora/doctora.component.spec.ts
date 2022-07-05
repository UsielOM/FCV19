import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctoraComponent } from './doctora.component';

describe('DoctoraComponent', () => {
  let component: DoctoraComponent;
  let fixture: ComponentFixture<DoctoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
