import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';

import { CityService } from './city.service';
import { City } from './city';


@Component({
	selector: 'flow-content',
	providers: [
	   CityService 
	],
	templateUrl: './flow.component.html',
	styles: [`
		.content tr, .content th{
			text-align:center;
		}
		.content thead{
			background: #5093c5;
		}
	`]
})

export class FlowComponent implements OnInit, OnDestroy{

		citys:City[];

		constructor(
			private cityService: CityService,
			private _ngzone: NgZone
		){
			this.cityService.postMessage.subscribe((city: City)=>{

				console.log(city.name + ">>>" + city.city);	
				if(!this.citys){
					this.citys = [city];	
				}else{
					this.citys = this.citys.concat(city);
				}
				this._ngzone.run(() => {
				    console.log('refresh table!');
				});
			});
			console.log('constructor');
		}

		ngOnInit(){
			console.log('ngOnInit');
			console.log(this.citys);
			if(!this.citys){
				var strCitys = sessionStorage.getItem('flow_table');
				if(strCitys){
					this.citys = JSON.parse(strCitys);
				}else{
					this.citys = this.cityService.getCitys();	
				}
			}else{
				this.citys = this.citys.concat(this.cityService.getCitys());
			}
		}

		postMessage(){
			this.cityService.postMessage.emit(new City("changan", "yichun"));	
		}

		ngOnDestroy(){
			console.log('OnDestroy');
			sessionStorage.setItem('flow_table', JSON.stringify(this.citys));
		}
}