import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSettingaFormComponent } from './user-settinga-form.component';

describe('UserSettingaFormComponent', () => {
  let component: UserSettingaFormComponent;
  let fixture: ComponentFixture<UserSettingaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSettingaFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSettingaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
