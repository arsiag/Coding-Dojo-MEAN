import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-saiyan',
  templateUrl: './saiyan.component.html',
  styleUrls: ['./saiyan.component.css'],
})
export class SaiyanComponent implements OnInit, OnChanges {
  @Input() saiyanPower;
  constructor() { }
  ngOnInit() {
  }
  ngOnChanges() {
    this.saiyanPower = this.saiyanPower * 10;
  }

}
