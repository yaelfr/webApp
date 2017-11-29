import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAchieveComponent } from './user-achieve.component';

describe('UserAchieveComponent', () => {
  let component: UserAchieveComponent;
  let fixture: ComponentFixture<UserAchieveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAchieveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAchieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
