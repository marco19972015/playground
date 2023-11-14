import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Steps for an observable
  // Obserbale [event emitter]
  // Observer  [subscriber]
  // Handler   [event handler] (CALL BACK)


  title = 'playground';

  data: any[] = [];

  myObservable = new Observable((o) => {
    
  })

  getData(){

  }

}
