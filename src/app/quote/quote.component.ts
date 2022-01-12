import { Component, OnInit } from '@angular/core';
import { Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

   quotes: Quote[] = [
   new Quote(1,'Motivation','Push yourself, because no one else is going to do it for you..', 'martin lutherking', new Date(2020,5,14), 0,0),
   new Quote(2, "Perseverance", "If you want to see the rainbow you have to put up with the rain..", 'Angelo', new Date(2020,5,14), 0,0),
   new Quote(3,'Inspiration','He was the light at the end of the road..,Sometimes later becomes never. ...', 'clinton391', new Date(2020,5,14), 0,0)
 ]

   deleteQuote(isComplete: any, index: number){
     if(isComplete){
       let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}..?`)

       if(toDelete){
         this.quotes.splice(index, 1);
       }
     }
   }

  toggleDetails(index: any){
    this.quotes[index].showDescription =! this.quotes[index].showDescription;
  }

  upvotes:number = 0;
  downvotes: number = 0;

  upvoteButton(i: number){
    this.quotes[i].upvotes++;
  }
  downvoteButton(i: number){
    this.quotes[i].downvotes--;
  }

  addNewQuote(quote: Quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.unshift(quote);
  }

  constructor() { }

  ngOnInit(): void {
  }

}