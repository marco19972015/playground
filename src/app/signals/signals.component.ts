import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.css']
})
export class SignalsComponent {

  // Property to store user input
  userInput: string = "";

  // Property to store the user input in array
  userInputArray = signal<string[]>(['Value 1']);


  // Push the input into array signal
  sigButton(){
    // Use mutate since array is a mutable type
    this.userInputArray.mutate((currentValue) => {
      currentValue.push(this.userInput)
    })

    console.log(this.userInputArray());
    
  }
}
