import { Injectable, EventEmitter } from '@angular/core';

import { CITYS } from './mock.citys';
import { City } from './city';
import { WebWorker } from './web.work';



@Injectable()
export class CityService {

	postMessage: EventEmitter<City>;

	constructor(
		private webWork:WebWorker
	){
		this.postMessage = new EventEmitter();

		this.webWork.postMessage.subscribe((city:City)=>{

			this.postMessage.emit(city);
		});
	}

	getCitys(): City[]{
		
		// this.postMessage.emit(new City("changan", "yichun"));
		return CITYS;	
	}
}
