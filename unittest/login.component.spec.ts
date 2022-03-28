import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Login button', () => {
    it('should call the login method when clicked', fakeAsync(() => {
      spyOn(component, 'loginUser').and.stub();
      const loginBtn = fixture.debugElement.query(
        (el) =>
          el.name === 'button' &&
          el.nativeElement.textContent === 'Log In' &&
          el.classes['btn']
      ).nativeElement;

      loginBtn.click();
      tick();

      expect(component.login).toHaveBeenCalled();
    }));
});

describe('Create Account button', () => {
  it('should call the login method when clicked', fakeAsync(() => {
    spyOn(component, 'create_account').and.stub();
    const loginBtn = fixture.debugElement.query(
      (el) =>
        el.name === 'button' &&
        el.nativeElement.textContent === 'Log In' &&
        el.classes['btn btn']
    ).nativeElement;

    loginBtn.click();
    tick();

    expect(component.create_account).toHaveBeenCalled();
  }));
});
});
