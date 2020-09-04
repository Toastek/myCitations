//ANGULAR
import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { IonicStorageModule } from '@ionic/storage';
//PAGES
import { MyApp } from "./app.component";
import { FavoritesPage } from "../pages/favorites/favorites";
import { LibraryPage } from "../pages/library/library";
import { CategoryQuotesPage } from "../pages/quotes/quotes";
import { QuotePage } from "../pages/quote/quote";
import { SettingsPage } from "../pages/settings/settings";
import { TabsPage } from "../pages/tabs/tabs";
//SERVICES
import { QuotesService } from './../services/quotes-service';
import { SettingsService } from "../services/settings-service";

@NgModule({
  declarations: [
    MyApp,
    FavoritesPage,
    LibraryPage,
    CategoryQuotesPage,
    QuotePage,
    SettingsPage,
    TabsPage,
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp), IonicStorageModule.forRoot()],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavoritesPage,
    LibraryPage,
    CategoryQuotesPage,
    QuotePage,
    SettingsPage,
    TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    QuotesService,
    SettingsService,
  ],
})
export class AppModule {}