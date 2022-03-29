import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBegingPageComponent } from './user-beging-page.component';

describe('UserBegingPageComponent', () => {
  let component: UserBegingPageComponent;
  let fixture: ComponentFixture<UserBegingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBegingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBegingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
