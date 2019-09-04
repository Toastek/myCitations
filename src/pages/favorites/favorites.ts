import { Component } from "@angular/core";
import { IonicPage, ModalController } from "ionic-angular";

import { Quote } from "../../data/quote.interface";
import { QuotePage } from "./../quote/quote";

import { QuotesService } from "./../../services/quotes-service";
import { SettingsService } from "./../../services/settings-service";
@IonicPage()
@Component({
  selector: "page-favorites",
  templateUrl: "favorites.html"
})
export class FavoritesPage {
  quotes: Quote[];
  dataloaded: boolean = false;

  constructor(
    private quoteService: QuotesService,
    private modalCtrl: ModalController,
    private settingsService: SettingsService
  ) {
    console.log("favorites.ts constructor");
    this.init();
  }

  async init() {
    console.log("ionViewWillEnter favorites page");
    this.quotes = await this.quoteService.getFavoriteQuotes();
    this.dataloaded = true;
  }

  ionViewWillEnter() {
    // this.quoteService
    //   .getFavoriteQuotes()
    //   .subscribe(quoteList => (this.quotes = quoteList));
  }

  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, { data: quote });
    modal.present();
    modal.onDidDismiss((unfavorite: boolean) => {
      switch (unfavorite) {
        case true:
          this.onRemoveFromFavorite(quote);
          break;
        case false:
          break;
      }
    });
  }

  async onRemoveFromFavorite(quote: Quote) {
    this.quoteService.removeQuoteFromFavorites(quote);
    this.quotes =await this.quoteService.getFavoriteQuotes();
    // this.quoteService
    //   .getFavoriteQuotes()
    //   .subscribe(quoteList => (this.quotes = quoteList));
  }

  // getBackground() {
  //   return this.settingsService.isAltBackground()
  //     ? "altQuoteBackground"
  //     : "quoteBackground";
  // }

  isAltBackground() {
    return this.settingsService.isAltBackground();
  }

  // ionViewWillEnter() {
  //   this.quotes = this.quoteService.getFavoriteQuotes();
  // }

  // onViewQuote(quote: Quote) {
  //   const modal = this.modalCtrl.create(QuotePage, { data: quote });
  //   modal.present();
  //   modal.onDidDismiss((unfavorite: boolean) => {
  //     switch (unfavorite) {
  //       case true:
  //         this.quoteService.removeQuoteFromFavorites(quote);
  //         this.quotes = this.quoteService.getFavoriteQuotes();
  //         break;
  //       case false:
  //         break;
  //     }
  //   });
  // }
}
