'use strict'
// import paper from '../../node_modules/paper/dist/paper-full.js';

import Style from '../style';
import conn from '../connect';

export default class Pen{
	constructor(){
		this._toolName = 'Pen';
		this._tool = new paper.Tool();
		this._tool.onMouseDown = (event) => this.onMouseDown(event);
		this._tool.onMouseDrag = (event) => {
			this._path.add(event.point);
			let data = {
				tool: this._toolName,
				name: this._path.name,
				action: "onMouseDrag",
				point: event.point,
				type: 'action'
			}
			conn.send(data);
		}

		// this._path = null;
		// this._color = 'black';

		this._style = new Style();
		conn.addCallBacks(this._toolName, this);
	}

	onMouseDown(event) {
	
		this._path = new paper.Path();

		this._path.name = conn.id + '-' + this._path.id;
		// this._path.strokeColor = this._color;
		this._path.strokeColor = Style.frontColor;
		this._path.strokeWidth = this._style.strokeWidth;
		this._path.dashArray = this._style.dashArray;
		this._path.shadowBlur = this._style.shadowBlur;
		this._path.shadowOffset = this._style.shadowOffset;
		this._path.visible = this._style.visible;
		this._path.blendMode = this._style.blendMode;
		this._path.opacity = this._style.opacity;
		this._path.add(event.point);
		let data = {
			tool: this._toolName,
			name: this._path.name,
			action: "onMouseDown",
			point: event.point,
			type: 'action'
		}
		conn.send(data);
	}

	peerAction(data){
		if(data['action'] == 'onMouseDown'){
			let path = new paper.Path();
			path.name = data['name'];
			// this._path.strokeColor = this._color;
			path.strokeColor = Style.frontColor;
			path.strokeWidth = this._style.strokeWidth;
			path.dashArray = this._style.dashArray;
			path.shadowBlur = this._style.shadowBlur;
			path.shadowOffset = this._style.shadowOffset;
			path.visible = this._style.visible;
			path.blendMode = this._style.blendMode;
			path.opacity = this._style.opacity;
			path.add([data['point'][1], data['point'][2]]);
		}
		else{
			let path = paper.project.activeLayer.children[data['name']];
			path.add([data['point'][1], data['point'][2]]);
		}
	}
	
	get tool () {return this._tool};
	get name () {return this._toolName};
	// get color () {return this._color};
	// set color (color) {this._color = color};

	set strokeWidth(width){this._style.strokeWidth = width;}
	set dashArray(array){this._style.dashArray = array;}
	set shadowBlur(num){this._style.shadowBlur = num;}
	set shadowOffset(num){this._style.shadowOffset = num;}
	set visible(vis){this._style.visible = vis;}
	set blendMode(mode){this._style.blendMode = mode;}
	set opacity(num){this._style.opacity = num;}
}