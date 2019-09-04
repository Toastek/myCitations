import { Component } from "@angular/core";
import { IonicPage, ViewController, NavParams } from "ionic-angular";
import { Quote } from "../../data/quote.interface";

@IonicPage()
@Component({
  selector: "page-quote",
  templateUrl: "quote.html"
})
export class QuotePage {
  selectedQuote: Quote;

  constructor(private viewCtrl: ViewController, private navParams: NavParams) {}

  ionViewWillEnter() {
    this.selectedQuote = this.navParams.get("data");
  }
  onCloseModal(unfavorite: boolean) {
    this.viewCtrl.dismiss(unfavorite);
  }
}
