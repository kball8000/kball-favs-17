import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Favorite Things - Getting Started';
  favoriteColor = 'blue';
  favoriteNumber = 0;
  items: FirebaseListObservable<any[]>;
  myItems: Array<any> = [];

  constructor(db: AngularFireDatabase) {
    this.items = db.list('/');
    this.items.forEach(x => console.dir(x))

    this.items.forEach(x => {
      this.myItems = x;
    })
    let database = firebase.database();
    let itemsRef = database.ref('/');
    itemsRef.on('value', function(el){
      let obj = el.val();
      for (let prop in obj){
        console.log('prop: ', obj[prop]);
      }
    })
  }

  dbRef = firebase.database().ref('/');
  itemsRef = firebase.database().ref('/items');

  setColor = function(selectedColor: string): void {
    this.favoriteColor = selectedColor;
  };
  updateColor = function(): void {
    this.itemsRef.update({favoriteColor: this.favoriteColor});
    // this.dbRef.on('value', data => console.dir(data));
  };

  setNum = (test): void => {
    this.favoriteNumber = (test) ? ++this.favoriteNumber : --this.favoriteNumber;
  }
  updateNum = (): void => {
    this.itemsRef.update({favoriteNumber: this.favoriteNumber});
  };

  increaseNum = () => this.favoriteNumber++;
  decreaseNum = () => this.favoriteNumber--;
  resetNum = () => this.favoriteNumber = 0;
}
