import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeComponent } from './home.component';

import {
	GridModule,
	ListModule,
	TabsModule,
	TilesModule
} from 'carbon-components-angular';

describe('HomeComponent', () => {
	let component: HomeComponent;
	let fixture: ComponentFixture<HomeComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			imports: [
				GridModule,
				ListModule,
				TabsModule,
				TilesModule
			],
			declarations: [ HomeComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HomeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
