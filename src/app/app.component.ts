import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DragNDropDemo';
  
  numbers: any[] = [];
  otherNumbers: any[] = [];

  scrollListNumbers:any[];

  constructor() {
    for (let index = 0; index < 5; index++) {
      this.numbers.push({
        index : index,
        color: Math.floor(Math.random()*16777215).toString(16)
      });
    }

    this.scrollListNumbers = Array(10000).fill(0);
    
  }

  onItemDropped(event: CdkDragDrop<number[]>) {
    // check if item is dropped to different container
    if (event.previousContainer != event.container) {
      // transfer item from one previous container array to current
      transferArrayItem(event.previousContainer.data, event.container.data,event.previousIndex,event.currentIndex);
    } else {
      // move item within array from previous index to current
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
  }

}
