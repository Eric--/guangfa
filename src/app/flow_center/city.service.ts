import { Injectable, EventEmitter } from '@angular/core';

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
	
}
