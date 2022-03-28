import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { EditAboutComponent } from './edit-about.component';

describe('EditAboutComponent', () => {
  let component: EditAboutComponent;
  let fixture: ComponentFixture<EditAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Create save button', () => {
    it('Save edits on the page', fakeAsync(() => {
      spyOn(component, 'save').and.stub();
      const ContinueBtn = fixture.debugElement.query(
        (el) =>
          el.name === 'button' &&
          el.nativeElement.textContent === 'Create Account' &&
          el.classes['btn']
      ).nativeElement;
  
      ContinueBtn.click();
      tick();
  
      expect(component.save).toHaveBeenCalled();
    }));
  });
});
