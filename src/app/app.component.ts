import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('teste') teste
  imgs = [
    {
      x : 100,
      y : 100,
      src: '../assets/code1.jpeg',
    },
    {
      x : 200,
      y : 200,
      src: '../assets/code2.jpeg',
    },
    {
      x : 300,
      y : 300,
      src: '../assets/code3.jpeg',
    },
  ]
  currentPosition = this.imgs

  ngOnInit() {
    const positionData = JSON.parse(localStorage.getItem('imagePositions'))

    if(positionData) {
      this.imgs = positionData
      this.currentPosition = [...this.imgs]
    }
  }
  dragEnd(event, index) {
    this.currentPosition[index] = {
      ...this.currentPosition[index],
      x: this.currentPosition[index].x + event.distance.x,
      y: this.currentPosition[index].y + event.distance.y,
    }

    localStorage.setItem('imagePositions', JSON.stringify(this.currentPosition))
  }
  reset() {
    console.log('reset button')
    console.log(this.teste)
  }
}
