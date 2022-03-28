import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { CredentialsComponent } from './credentials.component';

describe('CredentialsComponent', () => {
  let component: CredentialsComponent;
  let fixture: ComponentFixture<CredentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CredentialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Next  button', () => {
    it('take you to the next page', fakeAsync(() => {
      spyOn(component, 'next').and.stub();
      const ContinueBtn = fixture.debugElement.query(
        (el) =>
          el.name === 'button' &&
          el.nativeElement.textContent === 'Create Account' &&
          el.classes['btn']
      ).nativeElement;
  
      ContinueBtn.click();
      tick();
  
      expect(component.next).toHaveBeenCalled();
    }));
  });
});
