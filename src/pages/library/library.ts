import { Component, OnInit } from "@angular/core";
import { Quote } from "../../data/quote.interface";
import quotes from "../../data/quotes";
import { CategoryQuotesPage } from "../quotes/quotes";
@Component({
  selector: "page-library",
  templateUrl: "library.html"
})
export class LibraryPage {
  quoteCollection: { category: string; quotes: Quote[]; icon: string }[];
  quotesPage = CategoryQuotesPage;

  ionViewWillEnter() {
    console.log("ionViewWillEnter library");
    this.quoteCollection = quotes;
  }
  ionViewDidEnter() {

  }

  ionViewWillLeave() {
    console.log("ionViewWillLeave library");
  }
}
