import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// carbon-components-angular default imports
import { IconModule, IconService, UIShellModule } from 'carbon-components-angular';
// import Notification20 from '@carbon/icons/es/notification/20';
// import UserAvatar20 from '@carbon/icons/es/user--avatar/20';
// import AppSwitcher20 from '@carbon/icons/es/app-switcher/20';
import { HeaderComponent } from './header/header.component';
// import { CatalogComponent } from './pages/catalog/catalog.component';
// import { DocsComponent } from './pages/docs/docs.component';
// import { SupportComponent } from './pages/support/support.component';
// import { Link1Component } from './pages/link1/link1.component';

// import { _20 } from '@carbon/icons/es/notification/_20';
// import Notification from "@carbon/icons/lib/notification/20";

// import {
//   NotificationModule,
//   UserAvatarModule,
//   AppSwitcherModule
// } from '@carbon/icons';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // CatalogComponent,
		// DocsComponent,
		// SupportComponent,
		// Link1Component
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

    const Notification20 = {
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
          "d": "M28.7071,19.293,26,16.5859V13a10.0136,10.0136,0,0,0-9-9.9492V1H15V3.0508A10.0136,10.0136,0,0,0,6,13v3.5859L3.2929,19.293A1,1,0,0,0,3,20v3a1,1,0,0,0,1,1h7v.7768a5.152,5.152,0,0,0,4.5,5.1987A5.0057,5.0057,0,0,0,21,25V24h7a1,1,0,0,0,1-1V20A1,1,0,0,0,28.7071,19.293ZM19,25a3,3,0,0,1-6,0V24h6Zm8-3H5V20.4141L7.707,17.707A1,1,0,0,0,8,17V13a8,8,0,0,1,16,0v4a1,1,0,0,0,.293.707L27,20.4141Z"
        }
      }],
      "name": "notification",
      "size": 20
    };

    const UserAvatar20 = {
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
          "d": "M16,8a5,5,0,1,0,5,5A5,5,0,0,0,16,8Zm0,8a3,3,0,1,1,3-3A3.0034,3.0034,0,0,1,16,16Z"
        }
      }, {
        "elem": "path",
        "attrs": {
          "d": "M16,2A14,14,0,1,0,30,16,14.0158,14.0158,0,0,0,16,2ZM10,26.3765V25a3.0033,3.0033,0,0,1,3-3h6a3.0033,3.0033,0,0,1,3,3v1.3765a11.8989,11.8989,0,0,1-12,0Zm13.9925-1.4507A5.0016,5.0016,0,0,0,19,20H13a5.0016,5.0016,0,0,0-4.9925,4.9258,12,12,0,1,1,15.985,0Z"
        }
      }],
      "name": "user--avatar",
      "size": 20
    }

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
          "d": "M28 10H22V24h2V20h4a2.0027 2.0027 0 002-2V12A2.0023 2.0023 0 0028 10zm-4 8V12h4v6zM18 10H12V24h2V20h4a2.0027 2.0027 0 002-2V12A2.0023 2.0023 0 0018 10zm-4 8V12h4v6zM8 10H3v2H8v2H4a2 2 0 00-2 2v2a2 2 0 002 2h6V12A2.0023 2.0023 0 008 10zm0 8H4V16H8z"
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
