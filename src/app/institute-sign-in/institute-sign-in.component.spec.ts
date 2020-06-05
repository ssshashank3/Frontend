import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteSignInComponent } from './institute-sign-in.component';

describe('InstituteSignInComponent', () => {
  let component: InstituteSignInComponent;
  let fixture: ComponentFixture<InstituteSignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituteSignInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
