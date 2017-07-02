import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Favorite Things - Getting Started';
  favoriteColor = 'blue';
  favoriteNumber = 0;

  constructor(db: AngularFireDatabase) {

  } 

  setColor = function(selectedColor: string): void {
    console.log('heyo, colo2r: ' + selectedColor);
    this.favoriteColor = selectedColor;
  };
  updateColor = function(): void {
    console.log('you selected update colorR');
  };

  // setNum = (test) => this.favoriteNumber = (test) ? this.favoriteNumber++ : this.favoriteNumber--;
  setNum = (test): void => {
    console.log('running setNum, test: ' + test);
    if (test) {
      this.favoriteNumber++;
    } else {
      this.favoriteNumber--;
    }
    // this.favoriteNumber = (test) ? ++this.favoriteNumber : --this.favoriteNumber;
  }

  increaseNum = () => this.favoriteNumber++;
  decreaseNum = () => this.favoriteNumber--;
  resetNum = () => this.favoriteNumber = 0;
}
