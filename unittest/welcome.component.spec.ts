import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Login button', () => {
    it('should call the login method when clicked', fakeAsync(() => {
      spyOn(component, 'loginPage').and.stub();
      const loginBtn = fixture.debugElement.query(
        (el) =>
          el.name === 'button' &&
          el.nativeElement.textContent === 'Log In' &&
          el.classes['btn btn']
      ).nativeElement;

      loginBtn.click();
      tick();

      expect(component.login).toHaveBeenCalled();
    }));
});

describe('Create Account button', () => {
  it('should call the create account method when clicked', fakeAsync(() => {
    spyOn(component, 'createAccountPage').and.stub();
    const loginBtn = fixture.debugElement.query(
      (el) =>
        el.name === 'button' &&
        el.nativeElement.textContent === 'Create Account' &&
        el.classes['btn']
    ).nativeElement;

    loginBtn.click();
    tick();

    expect(component.login).toHaveBeenCalled();
  }));
});

});