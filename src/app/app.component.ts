import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'drag-drop-app';
  midshift = [
    '1pm - 2pm',
    '2pm - 3pm'
  ];
  dayshift = [
    '6am - 7am',
    '7am - 8am'
  ];
  eveshift = [
    '9pm - 10pm ',
    '10pm - 11pm'
  ];

  drop(event: CdkDragDrop<string[]>) {
    console.log('from: ' + event.previousContainer.id + ' to: ' + event.container.id);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
}
