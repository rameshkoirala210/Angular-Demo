import { Time } from '@angular/common';
import { Component, OnInit, ɵisObservable } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../data/data.service';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {
  
  originalUserSettings : UserSettings = {
    name: "",
    emailoffers: true,
    interfaceStyle: "",
    subscriptionType: "",
    notes: ""
  };
  singleModel = 'On';
  startDate: Date | undefined;
  startTime: Date | undefined;

  userSettings : UserSettings = {...this.originalUserSettings};
  postError = false;
  postErrorMessage = "";
  subscriptionTypes = ['Monthly', 'Annual', 'Lifetime'];
  //subscriptionTypes = Observable<string[]>;
  

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    //this.subscriptionTypes = this.dataService.getSubscriptionTypes();
    this.startDate = new Date();
    this.startTime = new Date();
  }

  onBlur(field: NgModel){
    console.log('In onBlur: ', field.valid)
  }

  onHttpError(errorResponse: any){
    console.log();
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit(form: NgForm){
    console.log('in onSubmit: ', form.value);

  //   if(form.valid){
  //     this.dataService.postUserSettingsForm(this.userSettings).subscribe(
  //       result => console.log("success: ", result),
  //       error => this.onHttpError(error)
  //     );
  //   }else {
  //     this.postError = true;
  //     this.postErrorMessage = "Please the the above errors"
  //   }
  }

}
