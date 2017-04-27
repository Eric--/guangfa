import { Injectable, EventEmitter } from '@angular/core';

import { City } from './city';

@Injectable()
export class WebWorker {

	postMessage: EventEmitter<City>;
	employee:Worker;

	constructor(){
		this.postMessage = new EventEmitter();
		if(typeof(Worker)!=="undefined"){

			let _this = this;
			this.employee = new Worker('app/flow_center/work.script.js');
			this.employee.onmessage=function(event){
				
				_this.postMessage.emit(JSON.parse(event.data));
			};
		}else{
		  console.log('Sorry! No Web Worker support..');
		}
	}

}