import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-plan-info',
  templateUrl: './plan-info.component.html',
  styleUrls: ['./plan-info.component.scss']
})
export class PlanInfoComponent implements OnInit {

  @Input() plan: FormControl = new FormControl('')
  @Input() billing: FormControl = new FormControl('')

  constructor() { }

  ngOnInit(): void {
  }

  onToggleClick(firstRadio: HTMLInputElement,
    secondRadio: HTMLInputElement) {
    if (firstRadio.checked) {
      secondRadio.checked = true
    } else {
      firstRadio.checked = true
    }
  }
  
}
