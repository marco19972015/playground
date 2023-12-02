import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // The problem with this is that we are running the DoCheck lifeCycle hook in the background

  // get the user input
  getUserInput: string = ''

  // Store the user input in an array
  storingUserInput: string[] = ['Iniitial string'];


  // Method to push our data into an array
  pushInToarray(){
    this.storingUserInput.push(this.getUserInput);
  }
}
