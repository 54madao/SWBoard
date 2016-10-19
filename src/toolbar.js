'use strict'

import Pen from './tools/pen';
import Shape from './tools/shape';
import Text from './tools/text';
import Select from './tools/select';

export default class ToolBar{

	constructor(elems){
		this._elems = elems;
		this._selected = null;

		//set toolbar
		this._tools = new Map();
		// this._tools.set('Pen', new Pen());
		// this._tools.set('Geo', new Pen('red'));
		this._elems['toolbar'].children('div').each((index, element) => {
			let name = $(element).attr('data-name');
			switch(name){
				case "Select":
					this._tools.set(name, new Select());
					break;
				case "Pen":
					this._tools.set(name, new Pen());
					break;
				case "Shape":
					this._tools.set(name, new Shape());
					break;
				case "Text":
					this._tools.set(name, new Text());
			}		
			$(element).on('click', (event) => this.select(event));
		})	

	}

	select(event){
		let name = $(event.currentTarget).attr('data-name');
		this._selected = this._tools.get(name);
		console.log(this._selected);
		this._selected._tool.activate();
	}

	get tools () {return this._tools;}

}