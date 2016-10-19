'use strict'

import Style from '../style';
// import paper from '../../node_modules/paper/dist/paper-full.js';

export default class Text{
	constructor(){
		this._tool = new paper.Tool();
		this._tool.onMouseDown = (event) => this.onMouseDown(event);
		this._tool.onMouseUp = (event) => this.onMouseUp(event);
	
		this._text = null;
		this._style = new Style();
	}

	onMouseDown(event) {
		let hitOptions = {
			fill: true,
			class: paper.PointText,
			tolerance: 5
		};

		let hitRes = paper.project.hitTest(event.point, hitOptions);
		if(hitRes){
			this._text = hitRes.item;
			this._text.selected = true;
		}
		else{
			this._text = new paper.PointText(event.point);
			this._text.fontFamily = this._style.fontFamily;
			this._text.fontWeight = this._style.fontWeight;
			this._text.fontSize = this._style.fontSize;
			this._text.justification = this._style.justification;
			this._text.fillColor = Style.frontColor;
			this._text.shadowBlur = this._style.shadowBlur;
			this._text.shadowOffset = this._style.shadowOffset;
			this._text.visible = this._style.visible;
			this._text.blendMode = this._style.blendMode;
			this._text.opacity = this._style.opacity;
			this._text.selected = true;
		}
		this.edit();

	}

	onMouseUp(event){

	}

	edit(){
		var input = $('<input id="fakeTextInput" class="fakeTextInput"></input>');

		input.css({
			position : 'absolute',
			top: 80,
			left: 100,
			zIndex : 10,
		});
		

		$('body').append(input);
		var fakeTextInput = $('#fakeTextInput');
		fakeTextInput.focus();
		fakeTextInput.val(this._text.content);

		fakeTextInput.keyup((event) => {
			this._text.content = fakeTextInput.val();
			if(event.keyCode === 13) {
				// finalizeInput(textItem);
				this._text.selected = false;
				$(event.currentTarget).remove();
			}
			paper.project.view.update();
		});
	}

	get tool () {return this._tool};
	set strokeWidth(width){this._style.strokeWidth = width;}
	set dashArray(array){this._style.dashArray = array;}
	set shadowBlur(num){this._style.shadowBlur = num;}
	set shadowOffset(num){this._style.shadowOffset = num;}
	set visible(vis){this._style.visible = vis;}
	set blendMode(mode){this._style.blendMode = mode;}
	set opacity(num){this._style.opacity = num;}
	set fontFamily(font){this._style.fontFamily = font;}
	set fontWeight(weight){ this._style.fontWeight = weight;}
	set fontSize(size){this._style.fontSize = size;}
	set justification(just){this._style.justification = just;}
}