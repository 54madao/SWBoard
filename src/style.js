'use strict'

export default class Style{
	constructor(){

		//Stroke Style
		// this.strokeColor = 'black';
		this._strokeWidth = 1;
		// this._strokeCap = 'butt'; //'round', 'square', 'butt'
		// this._stokeJoin = 'miter'; //'miter', 'round', 'bevel'
		// this._dashOffset = 0;
		this._dashArray = [];

		//Fill Style
		//this._fillColor = 'black';

		//Shadow Style
		//this._shadowColor = 'black';
		this._shadowBlur = 0;
		this._shadowOffset = 0;

		//properties
		this._visible = true;
		this._blendMode = 'normal'; //'normal', 'multiply', 'screen', 'overlay', 'soft-light', 'hard- light', 'color-dodge', 'color-burn', 'darken', 'lighten', 'difference', 'exclusion', 'hue', 'saturation', 'luminosity', 'color', 'add', 'subtract', 'average', 'pin-light', 'negation', 'source- over', 'source-in', 'source-out', 'source-atop', 'destination-over', 'destination-in', 'destination-out', 'destination-atop', 'lighter', 'darker', 'copy', 'xor'
		this._opacity = 1;

		//Character Style
		this._fontFamily = 'sans-serif';
		this._fontWeight = 'normal'; //bold
		this._fontSize = 20;
		// this._leading = 12;

		//Paragraph Style
		this._justification = 'left'; //'left', 'right', 'center'

	}

	get strokeWidth() {return this._strokeWidth;}
	set strokeWidth(width) {this._strokeWidth = width;}

	get dashArray() {return this._dashArray;}
	set dashArray(array){this._dashArray = array;}

	get shadowBlur(){return this._shadowBlur;}
	set shadowBlur(num){this._shadowBlur = num;}

	get shadowOffset(){return this._shadowOffset;}
	set shadowOffset(num){this._shadowOffset = num;}

	get visible(){return this._visible;}
	set visible(vis){this._visible = vis;}

	get blendMode(){return this._blendMode;}
	set blendMode(mode){this._blendMode = mode;}

	get opacity(){return this._opacity;}
	set opacity(num){this._opacity = num;}

	get fontFamily(){return this._fontFamily;}
	set fontFamily(font){this._fontFamily = font;}

	get fontWeight(){return this._fontWeight;}
	set fontWeight(weight){this._fontWeight = fontWeight;}

	get fontSize(){return this._fontSize;}
	set fontSize(size){this._fontSize = fontSize;}

	get justification(){return this._justification;}
	set justification(just){this._justification = just;}
}
Style.frontColor = 'black';
Style.backColor = 'white';