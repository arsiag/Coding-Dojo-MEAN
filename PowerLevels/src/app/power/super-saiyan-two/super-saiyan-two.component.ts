import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-two',
  templateUrl: './super-saiyan-two.component.html',
  styleUrls: ['./super-saiyan-two.component.css'],
})
export class SuperSaiyanTwoComponent implements OnInit, OnChanges {
  @Input() superSaiyanPower2;
  constructor() { }
  ngOnInit() {
  }
  ngOnChanges() {
    this.superSaiyanPower2 = this.superSaiyanPower2 * 150;
  }
}
