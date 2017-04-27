import { Component } from '@angular/core';

import { FastServiceItem } from './fast.service.item';
import { DataService } from '../service/data.service';

@Component({
	selector: 'fast-service',
	templateUrl: './fast.service.component.html',
	styleUrls: ['./fast.service.component.css']
})

export class FastServiceComponent{

	serviceItems: FastServiceItem[];

	constructor(
		private dataService:DataService
	){
		this.serviceItems = dataService.getFastServiceData();
	}
}