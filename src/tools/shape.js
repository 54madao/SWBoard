'use strict';
// import paper from '../../node_modules/paper/dist/paper-full.js';
import Style from '../style';

export default class Shape{
	constructor(){
		this._tool = new paper.Tool();
		// this._tool.onMouseDown = (event) => this.onMouseDown(event);
		this._tool.onMouseDrag = (event) => this.onMouseDrag(event);

		this._path = null;
		this._type = 'circle';
		this._shapes  = new Map([
        	['circle', this.createCircle],
        	['rect', this.createRect],
        	['ellipse', this.createEllipse],
        	['arc', this.createArc],
        	['polygon', this.createPolygon],
        	['star', this.createStar],
    	]);
		this._style = new Style();
	}

	onMouseDrag(event) {
		this._path = this._shapes.get(this._type)(event);
		this._path.strokeColor = Style.frontColor;
		this._path.strokeWidth = this._style.strokeWidth;
		this._path.dashArray = this._style.dashArray;
		this._path.shadowBlur = this._style.shadowBlur;
		this._path.shadowOffset = this._style.shadowOffset;
		this._path.visible = this._style.visible;
		this._path.blendMode = this._style.blendMode;
		this._path.opacity = this._style.opacity;
		this._path.removeOnDrag();	
	}


	createCircle(event){
		return new paper.Path.Circle({
			center: event.downPoint,
			radius: (event.downPoint.subtract(event.point)).length
		});
	}

	createRect(){

	}

	createEllipse(){

	}

	createArc(){

	}

	createPolygon(){

	}

	createStar(){

	}


	get tool () {return this._tool};
	set type(type){this._type = type;}
}