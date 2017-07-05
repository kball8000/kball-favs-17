import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Favorite Things - Getting Started';
  newDB = firebase.database();
  newItemsRef = this.newDB.ref('/items');
  newDBRef = this.newDB.ref();
  favoriteColor = '';
  favoriteNumber: number;
  items: FirebaseListObservable<any[]>;
  myItems: Array<any> = [];

  ngOnInit(): void {
    // itemsRef.once('value', data => this.favoriteColor = data.val().favoriteColor);
    this.newItemsRef.on('value', data => this.favoriteColor = data.val().favoriteColor);
    this.newItemsRef.on('value', data => this.favoriteNumber = data.val().favoriteNumber);

    this.newItemsRef.on('value', (data) => {
      console.log('d: ', data.val().favoriteNumber);
    });
  }
  ngOnDestroy(): void {
    this.newItemsRef.off()
  }

  constructor(db: AngularFireDatabase) {
    // put things like console.log or functions here or ngOnInit, not top level.
  }

  dbRef = firebase.database().ref('/');
  itemsRef = firebase.database().ref('/items');

  setColor = function(selectedColor: string): void {
    // this.newDBRef.child('items').update({favoriteColor: selectedColor})
    this.newItemsRef.update({favoriteColor: selectedColor})
  };
  updateColor = function(): void {
    this.itemsRef.update({favoriteColor: this.favoriteColor});
  };

  setNum = (test): void => {
    (test) ? this.favoriteNumber++ : this.favoriteNumber--;
    this.newItemsRef.update({favoriteNumber: this.favoriteNumber})
  }

  resetNum = () => this.newItemsRef.update({favoriteNumber: 0})
}
