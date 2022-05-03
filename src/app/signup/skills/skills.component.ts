import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
import { ConnecAndSave } from 'src/app/services/user.service.connandsave';
import { ImageService } from 'src/app/services/user.service.image';
import { LocalStorageService } from 'src/app/services/user.service.localstorage';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {


  userSaved = false;

  constructor(private router: Router, private userService:UserServiceService, 
    private saveService: ConnecAndSave, private imageService: ImageService, 
    private localStorage: LocalStorageService) { }

  ngOnInit(): void {
    console.log(this.imageService);
  }


  next(){

    this.userService.setJob("C.E.O");
    this.userService.setIncome("4000000");
    this.userService.setEducation("Bachelors");

    this.saveService.saveUser(this.userService)
              .subscribe(
                data => {
                  this.userSaved = true;
                  this.saveImages(data);   
                  this.router.navigateByUrl("/accountcreated");
                },
                error => {
                  console.log(error);
                },
               
              );
            console.log(this.userSaved); 

  }

  saveImages(username:any){
     
      const imageData = new FormData();
      imageData.append('file', this.imageService.getFirst(), username);

      this.saveService.saveImage(imageData).subscribe(
            data => {
              this.localStorage.set("token",data);
              console.log(data);
            }
      );

      if(this.imageService.getSecond() != null){
        const imageDataSec = new FormData();
        imageDataSec.append('file', this.imageService.getSecond(), username);
        this.saveService.saveImage(imageDataSec).subscribe(
          data => {
            this.localStorage.set("token",data);
          }
        )

      }

      if(this.imageService.getThird() != null){
        const imageDataSec = new FormData();
        imageDataSec.append('file', this.imageService.getThird(), username);
        this.saveService.saveImage(imageDataSec).subscribe(
          data => {
            this.localStorage.set("token",data);
          
          }
        )

      }

      if(this.imageService.getFourth() != null){
        const imageDataSec = new FormData();
        imageDataSec.append('file', this.imageService.getFourth(), username);
        this.saveService.saveImage(imageDataSec).subscribe(
          data => {
            this.localStorage.set("token",data);
          
          }
        )

      }

      if(this.imageService.getFith() != null){
        const imageDataSec = new FormData();
        imageDataSec.append('file', this.imageService.getFith(), username);
        this.saveService.saveImage(imageDataSec).subscribe(
          data => {
            this.localStorage.set("token",data);
          
          }
        )

      }

      if(this.imageService.getSix() != null){
        const imageDataSec = new FormData();
        imageDataSec.append('file', this.imageService.getSix(), username);
        this.saveService.saveImage(imageDataSec).subscribe(
          data => {
            this.localStorage.set("token",data);
          
          }
        )

      }

      
    
  }



  previous(){
    this.router.navigateByUrl("signup/children");
    

  }

}
