import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   constructor(private http: Http){}

   searchStock(){
     this.http.get("http://localhost:8000/stocks/1").subscribe(
       (res: Response) => {
         const stock = res.json();
         console.log(stock);
       }
     )
   }
  title = 'app';
}
