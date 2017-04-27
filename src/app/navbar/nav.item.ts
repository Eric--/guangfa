export class NavItem {

    constructor(
    	public name: string,
    	public linkUrl: string,
    	public className:string,//后续使用图片替代
    	public iconUrl?:string
		) { }

}