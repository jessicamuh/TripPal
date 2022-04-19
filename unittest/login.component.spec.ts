import {ComponentFixture, fakeAsync, TestBed, tick,} from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {By} from '@angular/platform-browser';

const mockAuthService = jasmine.createSpyObj('AuthService', [
  'loginWithEmailAndPassword',
  'signUpWithEmailAndPassword',
  'signOut',
]);


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    return await TestBed.configureTestingModule({
      declarations: , const: [LoginComponent]
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

describe('Login method', ()  => {
  it('should call the auth service login with email and password method', () => {
    mockAuthService.loginWithEmailAndPassword.and.resolveTo({});

    component.login();

    expect(mockAuthService.loginWithEmailAndPassword).toHaveBeenCalled();
  });

  it('should set the value of the authError variable when an error is thrown from the auth service', fakeAsync (() => {
    mockAuthService.loginWithEmailAndPassword.and.rejectWith(new Error('Error'));

    component.login();
    tick();

    expect(mockAuthService.loginWithEmailAndPassword).toHaveBeenCalled();
    expect(component.authError.toString()).toEqual('Error: Error');
  }));

  it('should pass the sign in form value to the auth service method', () => {
    mockAuthService.loginWithEmailAndPassword.and.resolveTo({});
    const loginFormValue = {email: 'foo', password: 'bar'};
    component.loginForm.setValue(loginFormValue);

    component.login();

    expect(mockAuthService.loginWithEmailAndPassword).toHaveBeenCalledWith(loginFormValue);
  });
});
