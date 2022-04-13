import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidbarUserComponent } from './sidbar-user.component';

describe('SidbarUserComponent', () => {
  let component: SidbarUserComponent;
  let fixture: ComponentFixture<SidbarUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidbarUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidbarUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
