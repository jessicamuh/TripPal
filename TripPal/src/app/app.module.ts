import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './signup/signup.component';
import { CredentialsComponent } from './signup/credentials/credentials.component';
import { AboutmeComponent } from './signup/aboutme/aboutme.component';
import { ChildrenComponent } from './signup/children/children.component';
import { SkillsComponent } from './signup/skills/skills.component';
import { AccountcreatedComponent } from './accountcreated/accountcreated.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    SignupComponent,
    CredentialsComponent,
    AboutmeComponent,
    ChildrenComponent,
    SkillsComponent,
    AccountcreatedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
