import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-area',
  templateUrl: './form-area.component.html',
  styleUrls: ['./form-area.component.scss']
})
export class FormAreaComponent implements OnInit {

  @Input() currentStep = 0
  @Input() formAreaTitle: string = ''
  @Input() formAreaDescription: string = ''
  @Input() purchaseForm: FormGroup = new FormGroup('')
  @Input() name: FormControl = new FormControl('')
  @Input() email: FormControl = new FormControl('')
  @Input() phone: FormControl = new FormControl('')
  @Input() plan: FormControl = new FormControl('')
  @Input() billing: FormControl = new FormControl('')
  @Input() addons: FormArray = new FormArray([] as any[])

  constructor() { }

  ngOnInit(): void {
  }

}
