import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userInput: string = '';
  userInputArray: any = ['this is something', 'this is another thing'];
  
  // Create an observable
  myObservable = new Observable((observer) => {
    // Set time intervals by 1 second
    setTimeout(() => { observer.next(this.userInput)}, 2000)
    // setTimeout(() => {observer.error(new Error('This error will be thrown after the first run')), 1000})
    // setTimeout(() => {observer.complete()})
  })

  // method to subscribe nad handle the subscribe 
  getAsynch(){
    this.myObservable.subscribe({
      next: (val: any) => { // remember the arrow function allows us to access array outside of .subscribe scope
      this.userInputArray.push(val);
      console.log(this.userInputArray);
      
      }, // we go back to methods
      error(err){
        alert(err);
      },
      complete(){
        alert('Data is completed and streamed')
      }
    })
  }
}
