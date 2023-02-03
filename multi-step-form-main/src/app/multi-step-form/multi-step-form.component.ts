import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-multi-step-form',
  templateUrl: './multi-step-form.component.html',
  styleUrls: ['./multi-step-form.component.scss']
})
export class MultiStepFormComponent implements OnInit {

  purchaseForm = this.fb.group({
    personalInfo: this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required]
    }),
    planInfo: this.fb.group({
      plan: ['', Validators.required],
      billing: ['yearly', Validators.required]
    }),
    addons: this.fb.array([])
  })

  name: FormControl = this.purchaseForm.get('personalInfo.name') as FormControl
  email: FormControl = this.purchaseForm.get('personalInfo.email') as FormControl
  phone: FormControl = this.purchaseForm.get('personalInfo.phone') as FormControl
  plan: FormControl = this.purchaseForm.get('planInfo.plan') as FormControl
  billing: FormControl = this.purchaseForm.get('planInfo.billing') as FormControl

  formAreaInfo = [
    { title: 'Personal info', description: 'Please provide your name, email address, and phone number.'},
    { title: 'Select your plan', description: 'You have the option of monthly or yearly billing.'},
    { title: 'Pick add-ons', description: 'Add-ons help enhance your gaming experience.'},
    { title: 'Finishing up', description: 'Double-check everything looks OK before confirming.'}
  ]

  steps = [
    { number: 1, title: 'Step 1', description: 'Your info'},
    { number: 2, title: 'Step 2', description: 'Select plan'},
    { number: 3, title: 'Step 3', description: 'Add-ons'},
    { number: 4, title: 'Step 4', description: 'Summary'}
  ]

  step = 1


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  nextStep() {
    console.log(this.addons)

    this.step++

    if (this.step === 5) {
      // handle form
    }
  }

  prevStep() {
    this.step--
  }

  get addons() {
    return this.purchaseForm.get('addons') as FormArray
  }

}
