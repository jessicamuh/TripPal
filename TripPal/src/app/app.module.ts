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
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatchlistComponent } from './dashboard/matchlist/matchlist.component';
import { MessageConnectionComponent } from './dashboard/message-connection/message-connection.component';
import { MessagesComponent } from './dashboard/message-connection/messages/messages.component';
import { ConnectionsComponent } from './dashboard/message-connection/connections/connections.component';
import { AccountsettingsComponent } from './dashboard/accountsettings/accountsettings.component';
import { EditprofileImageComponent } from './dashboard/accountsettings/editprofile-image/editprofile-image.component';
import { EditaboutComponent } from './dashboard/accountsettings/editabout/editabout.component';
import { DeleteAccountComponent } from './dashboard/accountsettings/delete-account/delete-account.component';

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
    AccountcreatedComponent,
    DashboardComponent,
    MatchlistComponent,
    MessageConnectionComponent,
    MessagesComponent,
    ConnectionsComponent,
    AccountsettingsComponent,
    EditprofileImageComponent,
    EditaboutComponent,
    DeleteAccountComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
