import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Steps for an observable
  // Obserbale [event emitter] (Call Back)
  // Observer  [subscriber]
  // Handler   [event handler] (Call Back)

  title = 'playground';

  data: number[] = [];

  // oberservable
  myObservable = new Observable((o) => {
    setTimeout(() => { o.next(1) }, 500)
    setTimeout(() => { o.next(2) }, 1000)
    setTimeout(() => { o.next(3) }, 1500)
  })

  getData(){
    // Observer [subscriber]
    this.myObservable.subscribe((o:any) => {   // Event handler Call Back
      this.data.push(o)
    })
  }
}
