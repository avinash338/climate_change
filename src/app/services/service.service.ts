import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor() {}

  bigChart() {
    return [
      {
        name: 'Rajasthan',
        data: [
          ['Sunday', 42],
          ['Monday', 45],
          ['Tuesday', 48],
          ['Wednesday', 47],
          ['Thursday', 49],
          ['Friday', 46],
          ['Saturday', 52]
        ]
      },
      {
        name: 'Andhra pradesh',
        data:[
          ['Sunday', 32],
          ['Monday', 35],
          ['Tuesday', 38],
          ['Wednesday', 37],
          ['Thursday', 39],
          ['Friday', 36],
          ['Saturday', 42]
        ]
      },
      {
        name: 'Jammu and Kahmir',
        data:[
          ['Sunday', 12],
          ['Monday', 15],
          ['Tuesday', 18],
          ['Wednesday', 17],
          ['Thursday', 19],
          ['Friday', 16],
          ['Saturday', 18]
        ]
      }
    ];
  }

  pieChart() {
    return [
      {
        name: 'Summer',
        y: 30,
        sliced: true,
        selected: true
      },
      {
        name: 'Winter',
        y: 20,
        sliced: false,
        selected: false
      },
      {
        name: 'Rainy',
        y: 25,
        sliced: false,
        selected: false
      },
      {
        name: 'Spring',
        y: 25,
        sliced: false,
        selected: false
      }
    ];
  }
}
