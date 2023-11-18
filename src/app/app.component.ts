import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Steps for an observable
  // Observable [event emitter] (Call Back)
  // Observer   [subscriber]
  // Handler    [event handler] (Call Back)

  userInput: string = '';
  userInputArray: any = [];
  
  // Create an observable
  myObservable = new Observable((observer) => {
    // Set time intervals by 1 second
    setTimeout(() => { observer.next(this.userInput)}, 1000)
  })

  // method to subscribe nad handle the subscribe 
  getAsynch(){
    // subscribe to the observable
    this.myObservable.subscribe((value) => {  // use the handler to push value getting retrieved
      this.userInputArray.push(value)
    })
  }

}
