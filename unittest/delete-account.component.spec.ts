import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { DeleteAccountComponent } from './delete-account.component';

describe('DeleteAccountComponent', () => {
  let component: DeleteAccountComponent;
  let fixture: ComponentFixture<DeleteAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Create Delete button', () => {
    it('take you to the next sign up page', fakeAsync(() => {
      spyOn(component, 'delete').and.stub();
      const ContinueBtn = fixture.debugElement.query(
        (el) =>
          el.name === 'button' &&
          el.nativeElement.textContent === 'Create Account' &&
          el.classes['btn']
      ).nativeElement;
  
      ContinueBtn.click();
      tick();
  
      expect(component.delete).toHaveBeenCalled();
    }));
  });
});
