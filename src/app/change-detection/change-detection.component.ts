import { Component } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.css']
})
export class ChangeDetectionComponent {
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
