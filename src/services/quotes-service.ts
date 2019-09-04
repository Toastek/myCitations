import { Storage } from "@ionic/storage";
import { Quote } from "../data/quote.interface";
import "rxjs/add/observable/of";

export class QuotesService {
  favoriteQuotes: Quote[] = [];
  storage = new Storage({ name: "_myCitationsData" });

  constructor() {}

  addQuoteToFavorites(quote: Quote) {
    this.favoriteQuotes.push(quote);
    console.log(this.favoriteQuotes);
    this.storage.set("mesCitationsArray", this.favoriteQuotes);
  }

  removeQuoteFromFavorites(quote: Quote) {
    const position = this.favoriteQuotes.findIndex((quoteEl: Quote) => {
      return quoteEl.id == quote.id;
    });
    this.favoriteQuotes.splice(position, 1);
    console.log('quotes-services remove');
    console.log(this.favoriteQuotes);
    this.storage.set("mesCitationsArray", this.favoriteQuotes);
    //this.getFavoriteQuotes();
  }

  // getFavoriteQuotes(){
  //   return this.favoriteQuotes.slice();

  // }

  async getFavoriteQuotes(): Promise<Quote[]> {
    await this.storage.get("mesCitationsArray").then(
      success => {
        if (success != null) {
          console.log('quotes-service getFavoriteQuotes');
          console.log(success);
          this.favoriteQuotes = success;
        }
      },
      error => {
        console.log("error on storage.get mesCitationsArray");
      }
    );
    return (this.favoriteQuotes.slice());
  }

  isQuoteFavorite(quote: Quote) {
    return this.favoriteQuotes.find((quoteElement: Quote) => {
      return quoteElement.id == quote.id;
    });
  }
}
