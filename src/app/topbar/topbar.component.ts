import { Output, EventEmitter, Component, Input, OnInit } from '@angular/core';
import { Headers, Http, RequestOptions, RequestOptionsArgs, URLSearchParams } from '@angular/http';

@Component({
	selector: 'top-bar',
	templateUrl: './topbar.component.html',
	styleUrls: ['./topbar.component.css']
})

export class TopbarComponent implements OnInit{

		@Input() userName: string;
		@Input() loginStatus: boolean;
		@Output() postMessage:EventEmitter<object> = new EventEmitter();

		private loginUrl = 'http://www.bitonair.com/app/user/';

		constructor(
			private http: Http
		){}

		userLogin():void{
			if(!this.loginStatus || !this.userName){
				//调起app登录
				this.postMessage.emit({type:"login"});
			}
		}

		userLogout():void{
			if(this.loginStatus || this.userName){

				let urlSearchParams = new URLSearchParams();
				urlSearchParams.set('action', 'logout');
				let params:RequestOptionsArgs = {
				    search: urlSearchParams
				};
				//退出登录
				this.http.get(this.loginUrl + "logout", params)
							.toPromise()
							.then(response => {
								var result = response.json();
								console.log(result);
								if(result && result.status == 0){
									//退出成功
									this.postMessage.emit({type:"logout"});
								}
							})
							.catch(this.handleError);
			}
		}

		ngOnInit(){
		}

		handleError(error: any){
			console.log(error);
		}
}