import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import {
	GridModule,
	ListModule,
	TabsModule,
	TilesModule,
	InputModule,
  TableModule,
  CheckboxModule,
} from 'carbon-components-angular';
import {
	FormBuilder,
	FormControl,
	FormGroup,
	ReactiveFormsModule
} from "@angular/forms";
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent],
	imports: [
		CommonModule,
		HomeRoutingModule,
		GridModule,
		ListModule,
		TabsModule,
		TilesModule,
		InputModule,
    TableModule,
    CheckboxModule,
	],
  exports: [
    TableModule,
  ],
})

export class HomeModule {

}
