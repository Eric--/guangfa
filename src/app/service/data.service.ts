import { Injectable, EventEmitter } from '@angular/core';

import { CITYS, NAVITEMS, FASTSERVICEITEMS,OTHERSERVICEITEMS } from './mock.data';
import { City } from '../flow_center/city';
import { NavItem } from '../navbar/nav.item';
import { FastServiceItem } from '../fast_service/fast.service.item';
import { OtherServiceItem } from '../other_service/other.service.item';


@Injectable()
export class DataService {

	postMessage: EventEmitter<City>;

	constructor(
	){
		this.postMessage = new EventEmitter();
	}

	getCitys(): City[]{
		
		return CITYS;	
	}

	getNavdata(): NavItem[]{

		return NAVITEMS;
	}

	getFastServiceData(): FastServiceItem[]{

		return FASTSERVICEITEMS;
	} 

	getOtherServiceData(): OtherServiceItem[]{

		return OTHERSERVICEITEMS;
	}
}
