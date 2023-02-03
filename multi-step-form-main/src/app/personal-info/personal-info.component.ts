import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  @Input() name: FormControl = new FormControl('')
  @Input() email: FormControl = new FormControl('')
  @Input() phone: FormControl = new FormControl('')

  constructor() { }

  ngOnInit(): void {
  }

}
