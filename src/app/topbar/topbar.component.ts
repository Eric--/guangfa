import { Output, EventEmitter, Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'top-bar',
	templateUrl: './topbar.component.html',
	styleUrls: ['./topbar.component.css']
})

export class TopbarComponent implements OnInit{

		@Input() userName: string;
		@Input() loginStatus: boolean;
		@Output() postMessage:EventEmitter<object> = new EventEmitter();

		userLogin():void{
			if(!this.loginStatus || !this.userName){
				//调起app登录
				this.postMessage.emit({type:"login"});
			}
		}

		userLogout():void{
			if(this.loginStatus || this.userName){
				//退出登录
				this.postMessage.emit({type:"logout"});
			}
		}

		ngOnInit(){
		}
}