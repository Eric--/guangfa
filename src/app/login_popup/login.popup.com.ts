import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Headers, Http, RequestOptions, RequestOptionsArgs, URLSearchParams } from '@angular/http';

@Component({
	selector: 'login-popup',
	templateUrl: './login.popup.com.html',
	styleUrls: ['./login.popup.com.css']
})

export class LoginPopupComponent implements OnInit{

	@Input() show:boolean;
	@Output() postMessage:EventEmitter<object> = new EventEmitter();
	account:string;
	password:string;

	private loginUrl = 'http://www.bitonair.com/app/user/';

	constructor(
		private http: Http
	){}

	hide(){
		this.postMessage.emit({show: false});
	}

	userLogin(){
		//post
		let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
		let options = new RequestOptions({ headers: headers });
		var body = "username=" + this.account + "&password=" + this.password;

		//get
		// let urlSearchParams = new URLSearchParams();
		// urlSearchParams.set('username', this.account);
		// urlSearchParams.set('password', this.password);
		// let params:RequestOptionsArgs = {
		//     search: urlSearchParams
		// };

		this.http.post(this.loginUrl + "login", body, options)
					.toPromise()
					.then(response => {
						var result = response.json();
						console.log(result);
						if(result && result.status == 0){
							//登录成功
							this.postMessage.emit({show: false, userName: this.account});
						}
					})
					.catch(this.handleError);
	}

	ngOnInit(){
	}

	handleError(error: any){
		console.log(error);
	}

}