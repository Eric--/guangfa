import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'business-content',
	template: `
		<div class="content">
		    <fast-service></fast-service>
		    <other-service></other-service>
		</div>
	`
})

export class BusinessComponent implements OnInit{

		ngOnInit(){
		}
}