import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

export class MyItems {
  Value:string;
  constructor(Value:string)
  {
    this.Value = Value;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Manipulating Arrays!';

  // Array where we are going to do CRUD operations
  myItems: MyItems[] = new Array();

  // Other variables
  IsForUpdate: boolean = false;
  newItem: any = {};
  updatedItem: any = {};
  

  //constructor
  constructor()
  {
    // this.arr.push(
    //   new MyItems("First value"),
    //   new MyItems("Second value"),
    //   new MyItems("Third value")
    // );
  }
// To add new item in array
AddItem() {
  this.myItems.push(
    this.newItem
  );
  console.log(this.newItem);
  this.newItem = {};
}

  // When user selects edit option
  EditItem(i) {
    this.newItem.Value = this.myItems[i].Value;
    this.updatedItem = i;
    this.IsForUpdate = true;
  }

  // When user clicks on update button to submit updated value
  UpdateItem() {
    let data = this.updatedItem;
    for (let i = 0; i < this.myItems.length; i++) {
      if (i == data) {
        this.myItems[i].Value = this.newItem.Value;
      }
    }
    this.IsForUpdate = false;
    this.newItem = {};
  }

  // To delete specific item
  DeleteItem(i) {
    this.myItems.splice(i, 1);
  }
  
}
