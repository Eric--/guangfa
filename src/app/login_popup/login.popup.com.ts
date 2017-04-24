import { Component, Input, OnInit, OnChanges, Output, EventEmitter} from '@angular/core';

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

	hide(){
		this.postMessage.emit({show: false});
	}

	userLogin(){
		console.log(this.account);
		console.log(this.password);
		//登录成功
		this.postMessage.emit({show: false, userName: this.account});
	}

	ngOnInit(){
	}

	ngOnChanges(){
	}
}