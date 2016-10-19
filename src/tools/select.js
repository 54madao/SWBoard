'use strict'
// import paper from '../../node_modules/paper/dist/paper-full.js';

export default class Select{
	constructor(){
		this._tool = new paper.Tool();
		this._tool.onMouseDown = (event) => this.onMouseDown(event);
		this._tool.onMouseDrag = (event) => this.onMouseDrag(event);
		this._item = null;
	}

	onMouseDown(event) {
		let hitOptions = {
			segments: true,
			stroke: true,
			curves: true,
			fill: true,
			guide: false,
			tolerance: 5
		};
		let hitRes = paper.project.hitTest(event.point, hitOptions);
		if (hitRes) {
			this._item = hitRes.item;
			this._item.selected = true;
		}
		else if(this._item){
			this._item.selected = false;
			this._item = null;
		}
	}

	onMouseDrag(event) {
		if(this._item && this._item.selected){
			this._item.position = this._item.position.add(event.delta);
		}
	}

	get tool () {return this._tool};
}