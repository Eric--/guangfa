import { Injectable, EventEmitter } from '@angular/core';


@Injectable()
export class CookieService {

	constructor(){

	}

	getCookie(key: string){

		var arr, reg = new RegExp("(^| )" + key + "=([^;]*)(;|$)");
		if (arr = document.cookie.match(reg))
		    return decodeURIComponent(arr[2]);
		else
		    return '';
	}

}