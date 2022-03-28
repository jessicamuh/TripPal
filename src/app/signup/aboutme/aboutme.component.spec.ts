import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { AboutmeComponent } from './aboutme.component';

describe('AboutmeComponent', () => {
  let component: AboutmeComponent;
  let fixture: ComponentFixture<AboutmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Create Continue button', () => {
    it('take you to the next sign up page', fakeAsync(() => {
      spyOn(component, 'continue').and.stub();
      const ContinueBtn = fixture.debugElement.query(
        (el) =>
          el.name === 'button' &&
          el.nativeElement.textContent === 'Create Account' &&
          el.classes['btn']
      ).nativeElement;
  
      ContinueBtn.click();
      tick();
  
      expect(component.continue).toHaveBeenCalled();
    }));
  });
});