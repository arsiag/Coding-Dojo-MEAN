import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-super-saiyan',
  templateUrl: './super-saiyan.component.html',
  styleUrls: ['./super-saiyan.component.css'],
})
export class SuperSaiyanComponent implements OnInit, OnChanges {
  @Input() superSaiyanPower;
  constructor() { }
  ngOnInit() {
  }
  ngOnChanges() {
    this.superSaiyanPower = this.superSaiyanPower * 90;
  }
}
