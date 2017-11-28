import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  options = ['#00008B', '#008B8B', '#A9A9A9', '#006400', '#ADFF2F', '#D2B48C'];
  colors = [];

  fillArray1(): void {
    for (let y = 0; y < 10; y++) {
      const randNum = (Math.floor(Math.random() * 6) );
      this.colors.push(this.options[randNum]);
    }

  }
  fillArray2(): void {
      for (let y = 0; y < 10; y++) {
        const randNum = (Math.floor(Math.random() * 6) ) + 1;
        if (randNum === 1) {
          this.colors.push('DarkSeaGreen ');
        } else if (randNum === 2) {
          this.colors.push('MediumBlue ');
        } else if (randNum === 3) {
          this.colors.push('MediumAquaMarine ');
        } else if (randNum === 4) {
          this.colors.push('DarkBlue ');
        } else if (randNum === 5) {
          this.colors.push('CadetBlue ');
        } else if (randNum === 6) {
          this.colors.push('Chartreuse');
        }
      }
    }

  ngOnInit(): void {
    this.fillArray1();
  }
}
