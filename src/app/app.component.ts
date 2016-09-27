import { Component } from '@angular/core';
import { User } from './user';

const USERS = [
  new User("Jack", 25, "jackie", 180, 80),
  new User("Pop", 25, "jackie", 162, 60),
  new User("Yom", 25, "jackie", 170, 50),
  new User("Nick", 25, "jackie", 152, 50),
  new User("Miggie", 25, "jackie", 166, 70)
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Awesome"
  selectedUser: User;
  users: Array<User>;
  user: User
  isEditMode: boolean = false;

  constructor() {
    this.user = new User("Jack222", 25, "jackie", 180, 80);
    this.user.name = "karl";
    this.user.age = 30;
    this.user.weight = 50;
    this.user.height = 70;


    this.selectedUser = USERS[0];
    this.users = USERS;
  }



  onCheckAge() {
    if (this.user.isOld()) {
      alert("Too old")
    } else {
      alert("Ok");
    }
  }

  onShowBMI() {
    alert(this.user.getBMI());
  }

  isHealthy(): boolean {
    return this.user.isHealthy();
  }


  addUser() {
    let tu:User = new User("Jack", 25, "jackie", 180, 80);

    tu.name = prompt("name");
    tu.password = prompt("password");
    tu.age = parseInt(prompt("age"));
    tu.weight = parseInt(prompt("weight"));
    tu.height = parseInt(prompt("height"));


    this.users.push(tu);
  }
}
