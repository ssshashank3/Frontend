import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyStudentComponent } from './modify-student.component';

describe('ModifyStudentComponent', () => {
  let component: ModifyStudentComponent;
  let fixture: ComponentFixture<ModifyStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
