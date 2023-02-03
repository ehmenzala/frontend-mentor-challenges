import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-resume-info',
  templateUrl: './resume-info.component.html',
  styleUrls: ['./resume-info.component.scss']
})
export class ResumeInfoComponent implements OnInit {

  @Input() purchaseForm: FormGroup = new FormGroup('')

  constructor() { }

  ngOnInit(): void {
  }

}
