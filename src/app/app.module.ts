import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// carbon-components-angular default imports
import { IconModule, IconService, UIShellModule } from 'carbon-components-angular';
import { HeaderComponent } from './header/header.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { DocsComponent } from './pages/docs/docs.component';
import { SupportComponent } from './pages/support/support.component';
import { Link1Component } from './pages/link1/link1.component';
import { Notification20, UserAvatar20, AppSwitcher20 } from "@carbon/icons";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CatalogComponent,
		DocsComponent,
		SupportComponent,
		Link1Component
  ],
  imports: [
    BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		AppRoutingModule,
		UIShellModule,
		IconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

	constructor(protected iconService: IconService) {

    const AppSwitcher20 = {
      "elem": "svg",
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 32 32",
        "fill": "currentColor",
        "width": 20,
        "height": 20
      },
      "content": [{
        "elem": "path",
        "attrs": {
          "d": "M14 4H18V8H14zM4 4H8V8H4zM24 4H28V8H24zM14 14H18V18H14zM4 14H8V18H4zM24 14H28V18H24zM14 24H18V28H14zM4 24H8V28H4zM24 24H28V28H24z"
        }
      }],
      "name": "app-switcher",
      "size": 20
    }

		iconService.registerAll([
			Notification20,
			UserAvatar20,
			AppSwitcher20
		]);
	}
}
