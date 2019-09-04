import { NavController, Nav, NavParams } from "ionic-angular";
import { Component } from "@angular/core";
import { FavoritesPage } from "../favorites/favorites";
import { LibraryPage } from "../library/library";

@Component({
  selector: "page-tabs",
  templateUrl: "tabs.html"
})
export class TabsPage {
  favoritesPage = FavoritesPage;
  libraryPage = LibraryPage;
  tab: any;
  tabIndex: number;
  constructor(public navParams: NavParams, public navCtrl: NavController) {
    this.tabIndex = this.navParams.get('tabIndex');
  }

  ionViewWillEnter(){
   console.log('ionViewWillEnter TabsPage');
  }
}

//trouver un moyen de changer l'onglet actif quand on setRoot sur favorites ou library page
