import { QuotesService } from "./../../services/quotes-service";
import { Component, OnInit } from "@angular/core";
import { IonicPage, NavParams, AlertController } from "ionic-angular";
import { Quote } from "../../data/quote.interface";
import { SettingsService } from "./../../services/settings-service";

@IonicPage()
@Component({
  selector: "page-quotes",
  templateUrl: "quotes.html"
})
export class CategoryQuotesPage implements OnInit {
  quoteGroup: { category: string; quotes: Quote[]; icon: string };

  constructor(
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private quoteService: QuotesService,
    private settingsService: SettingsService
  ) {}

  ngOnInit() {
    console.log('ngOnInit CategoryQuotesPage');
    this.quoteGroup = this.navParams.data;
    console.log("quoteGroup = ", this.quoteGroup);
  }

  async onAddToFavorite(selectedQuote: Quote) {
    const alert = await this.alertCtrl.create({
      title: "Ajoutez cette citation à vos favories !",
      message: "Êtes-vous sûr(e) de vouloir garder cette citation ?",
      buttons: [
        {
          text: "annuler",
          handler: () => {
            console.log("cancel alert button clicked");
          },
          role: "cancel"
        },
        {
          text: "ajouter",
          handler: () => {
            console.log("add alert button clicked");
            this.quoteService.addQuoteToFavorites(selectedQuote);
          }
        }
      ]
    });

    await alert.present();
  }

  async onRemoveFromFavorite(selectedQuote: Quote) {

    const alert = await this.alertCtrl.create({
      title: "Supprimez cette citation de vos favories !",
      message: "Êtes-vous sûr(e) de vouloir supprimer cette citation ? Vous pourrez toujours la réajouter plus tard...",
      buttons: [
        {
          text: "annuler",
          handler: () => {
            console.log("cancel alert button clicked");
          },
          role: "cancel"
        },
        {
          text: "supprimer",
          handler: () => {
            console.log("add alert button clicked");
            this.quoteService.removeQuoteFromFavorites(selectedQuote);
          }
        }
      ]
    });
    await alert.present();
  }

  isFavorite(quote: Quote) {
    return this.quoteService.isQuoteFavorite(quote);
  }

  isDarkTheme() {
    return this.settingsService.isAltBackground();
  }
}
