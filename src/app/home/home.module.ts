import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import {
	GridModule,
	ListModule,
	TabsModule,
	TilesModule,
	InputModule,
} from 'carbon-components-angular';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
	imports: [
		CommonModule,
		HomeRoutingModule,
		GridModule,
		ListModule,
		TabsModule,
		TilesModule,
		InputModule
	],
	declarations: [HomeComponent]
})
export class HomeModule { }
