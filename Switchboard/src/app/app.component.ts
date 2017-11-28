import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  switches = [];
  fillArray(): void {
    for (let y = 0; y < 10; y++) {
      this.switches.push('green');
    }

  }
  toggle(idx: number): void {
    if (this.switches[idx] === 'green') {
      this.switches[idx] = 'red';
    } else {
      this.switches[idx] = 'green';
    }
  }
  ngOnInit(): void {
    this.fillArray();
  }
  // Alternative
  // switches = [true, true, true, true, true, true, true, true, true, true];
  // flipSwitch(idx) {
  //   this.switches[idx] = !this.switches[idx];
  // }
}
