import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-step',
  templateUrl: './form-step.component.html',
  styleUrls: ['./form-step.component.scss']
})
export class FormStepComponent implements OnInit {

  @Input() step!: { number: number, title: string, description: string }
  @Input() currentStep!: number

  constructor() { }

  ngOnInit(): void {
  }

}
