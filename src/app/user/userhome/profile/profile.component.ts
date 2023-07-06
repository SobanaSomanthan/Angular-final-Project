import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LogService } from 'src/app/services/log.service';
import { ProfileService } from 'src/app/shared/services/profile.service';
interface User{
  username: string;
email: string;
address: string;
phonenumber: number;
gender: string;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent implements OnInit {
  userData: any = {};
  profileForm : FormGroup | any;
  currentUserData: User | any;
  currentUserEmail!: any;
  curentUserName!: any;
  curentUserAddress: any;
  curentUserNumber: any;
  constructor(private p:ProfileService, private logService: LogService, private fb: FormBuilder,
    private http: HttpClient) { 
    this.currentUserEmail = this.logService.getCurrentUserEmail();
    this.curentUserName = this.logService.getCurrentUserEmail();
    this.curentUserAddress = this.logService.getCurrentUserEmail();
    this.curentUserNumber = this.logService.getCurrentUserEmail();
  }
      ngOnInit(): void { 
      this.profileForm = this.fb.group({
      });
      this.p.getProfile().subscribe((users: User[]) => {
        this.currentUserData = users.find((user: User) => user.email === this.currentUserEmail);
        this.curentUserName = users.find((user: User)=> user.email === this.currentUserEmail)?.username;
        this.curentUserName = users.find((user: User)=> user.email === this.currentUserEmail)?.address;
        this.curentUserName = users.find((user: User)=> user.email === this.currentUserEmail)?.phonenumber;
      });
  }
  
}