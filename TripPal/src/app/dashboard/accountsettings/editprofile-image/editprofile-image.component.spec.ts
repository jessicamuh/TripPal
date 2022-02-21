import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprofileImageComponent } from './editprofile-image.component';

describe('EditprofileImageComponent', () => {
  let component: EditprofileImageComponent;
  let fixture: ComponentFixture<EditprofileImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditprofileImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditprofileImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
