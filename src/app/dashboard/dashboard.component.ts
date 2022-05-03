import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../services/user.service.commonservice';
import { DashboardService } from '../services/user.service.dashboardservice';
import { JWTTokenService } from '../services/user.service.jwttokenservice';
import { LocalStorageService } from '../services/user.service.localstorage';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  

  rightSideContent = 1;

  accountsetting = true;
  editabout = false;
  deleteaccount = false;
  username:any = '';

  profileImage = "/../assets/images/girl.JPG";

  userImage= [];
  userInfo = [];
  

  constructor(private router: Router, private localeStorage: LocalStorageService,
              private jwtTokenService: JWTTokenService, private dashboardService: DashboardService,
              private commonService: CommonService) { }

  ngOnInit(): void {
    

    let token:any = this.localeStorage.get('token');
    this.jwtTokenService.setToken(token);
    this.username = this.jwtTokenService.getUser();
    // let username:any = this.jwtTokenService.decodedToken.sub
// console.log(this.username);
  this.dashboardService.getUserImages(this.username).subscribe(
    data => {
      console.log(data);
      this.commonService.setUserService(data);
      this.localeStorage.set('userinfo', data.username);
      this.profileImage = data.imageUrl;
    }
  )
       

    if(this.router.url === '/dashboard/accountsettings' || this.router.url === '/dashboard/deleteaccount' 
    ||  this.router.url === '/dashboard/editabout'
    ){
      this.rightSideContent = 2;
    }

    if(this.router.url === '/dashboard/deleteaccount'){
      this.deleteaccount = true;
      this.editabout = false;
      this.accountsetting = false;
     }
     if(this.router.url === '/dashboard/accountsettings'){
      this.deleteaccount = false;
      this.editabout = false;
      this.accountsetting = true;
     }
     if(this.router.url === '/dashboard/editabout'){
      this.deleteaccount = false;
      this.editabout = true;
      this.accountsetting = false;
     }
    

   
  }

  editProfile(){
    if(this.rightSideContent == 1){
      this.rightSideContent = 2;
      this.router.navigateByUrl("/dashboard/accountsettings")
    } else {
      this.rightSideContent = 1;
      this.router.navigateByUrl("/dashboard")
    }
    
    
   
  }

  gotoDeleteaccount(){
       if(this.router.url != '/dashboard/deleteaccount'){
        this.router.navigateByUrl("/dashboard/deleteaccount");
       }
       this.deleteaccount = true;
       this.editabout = false;
       this.accountsetting = false;
     
  }

  gotoProfileImages(){
    if(this.router.url != '/dashboard/accountsettings'){
      this.router.navigateByUrl("/dashboard/accountsettings");
     }

     this.deleteaccount = false;
     this.editabout = false;
     this.accountsetting = true;
  }

  gotoAbout(){
    if(this.router.url != '/dashboard/editabout'){
      this.router.navigateByUrl("/dashboard/editabout");
     }

     this.deleteaccount = false;
     this.editabout = true;
     this.accountsetting = false;
  }
  

  logout(){

    this.localeStorage.remove('token');
    this.router.navigateByUrl("/login");
  }
  
}
