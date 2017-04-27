import { Component } from '@angular/core';

import { DataService } from '../service/data.service';
import { NavItem } from './nav.item';

@Component({
	selector: 'nav-bar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})

export class NavbarComponent{

	navItems:NavItem[];

	constructor(
		private dataService: DataService
	){
		this.navItems = this.dataService.getNavdata();
	}

}