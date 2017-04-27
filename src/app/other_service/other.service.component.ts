import { Component } from '@angular/core';

import { OtherServiceItem } from './other.service.item';
import { DataService } from '../service/data.service';

@Component({
	selector: 'other-service',
	templateUrl: './other.service.component.html',
	styleUrls: ['./other.service.component.css']
})

export class OtherServiceComponent{

	serviceItems: OtherServiceItem[];

	constructor(
		private dataService:DataService 
	){
		this.serviceItems = this.dataService.getOtherServiceData();
	}
}