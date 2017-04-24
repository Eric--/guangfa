
import { Component, OnInit, OnChanges} from '@angular/core';

import { CookieService } from './service/cookie.service'; 


@Component({
	selector: 'system-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnChanges{

	layerHidden:boolean = true;
	loginPopupShow:boolean = false;
	loginStatus:boolean = false;
	userName:string = '';

	constructor(
		private cookieService: CookieService 
	){}

	topbarHandler({type}: {type:string}){
		if(type == 'login'){
			this.loginPopupShow = true;
			this.layerHidden = false;
		}else{
			this.userName = '';
			this.loginStatus = false;
		}
	}	 

	loginPopupHandler({show, userName}: {show:boolean,userName:string}){
		this.loginPopupShow = show;
		this.layerHidden = !show;
		if(userName){
			this.userName = userName;
			this.loginStatus = true;
		}
	}

	ngOnInit(){
		var userName = this.cookieService.getCookie('sys_username');
		if(userName){
			this.userName = userName;
			this.loginStatus = true;
		}else{
			this.loginPopupShow = true;
			this.layerHidden = false;
		}
	}

	ngOnChanges() {
	}
}
