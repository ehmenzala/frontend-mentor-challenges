import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormAreaComponent } from './form-area/form-area.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { PlanInfoComponent } from './plan-info/plan-info.component';
import { AddOnsInfoComponent } from './add-ons-info/add-ons-info.component';
import { ResumeInfoComponent } from './resume-info/resume-info.component';
import { FormStepComponent } from './form-step/form-step.component';
import { MultiStepFormComponent } from './multi-step-form/multi-step-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormAreaComponent,
    PersonalInfoComponent,
    PlanInfoComponent,
    AddOnsInfoComponent,
    ResumeInfoComponent,
    FormStepComponent,
    MultiStepFormComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
