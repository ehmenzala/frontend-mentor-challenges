import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-ons-info',
  templateUrl: './add-ons-info.component.html',
  styleUrls: ['./add-ons-info.component.scss']
})
export class AddOnsInfoComponent implements OnInit {

  @Input() addons: FormArray = new FormArray([] as any[])

  checks = [
    {
      title: 'Online service',
      description: 'Access to multiplayer games',
      value: 'online-service',
      price: '+1$/mo'
    },
    {
      title: 'Larger Storage',
      description: 'Extra 1TB of cloud save',
      value: 'larger-storage',
      price: '+2$/mo'
    },
    {
      title: 'Customizable profile',
      description: 'Custom theme on your profile',
      value: 'customizable-profile',
      price: '+2$/mo'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onCheckChange(e: Event) {
    const target = e.target as HTMLInputElement
    const formArray: FormArray = this.addons as FormArray

    if (target.checked) {
      formArray.push(new FormControl(target.value))
    } else {
      formArray.controls.forEach((ctrl, i)=> {
        if (ctrl.value == target.value) {
          formArray.removeAt(i)
          return
        }
      })
    }

  }

}
