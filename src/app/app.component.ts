import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userInput: string = '';
  userInputArray: any = [];
  
  // Create an observable
  myObservable = new Observable((observer) => {
    // Set time intervals by 1 second
    setTimeout(() => { observer.next(this.userInput)},)
    setTimeout(() => {observer.error(new Error('This error will be thrown after the first run')), 1000})
    // setTimeout(() => {observer.complete()})
  })

  // method to subscribe nad handle the subscribe 
  getAsynch(){
    this.myObservable.subscribe({
      next: (val: any) => { // remember the arrow function allows us to access array outside of .subscribe scope
      this.userInputArray.push(val);
      }, // we go back to methods
      error(err){
        alert(err);
      },
      complete(){
        alert('Data is completed and streamed')
      }
    })

    // // subscribe, error, complete
    // // subscribe to the observable
    // this.myObservable.subscribe((value) => {  // use the handler to push value getting retrieved
    //   this.userInputArray.push(value)
    // }, (err) => {
    //   alert(err)
    // }
    // )}
  }
}
