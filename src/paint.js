'use strict'

import "babel-polyfill";
// import $ from 'jquery';
// import paper from '../node_modules/paper/dist/paper-full.js';
// require('paper/dist/paper-full');
import ToolBar from './toolbar';
import Menu from './menu';

export default class Paint{

	constructor(elems){
		if (window.File && window.FileReader && window.FileList && window.Blob) {
		  // Great success! All the File APIs are supported.
		} else {
		  alert('The File APIs are not fully supported in this browser.');
		}
		

		paper.setup(elems['canvas'][0]);
		this._toolbar = new ToolBar(elems);
		this._menu = new Menu(elems);

		elems['canvas'].on('dragover', (event) => this.handleDragOver(event));
		elems['canvas'].on('drop', (event) => this.handleDrop(event));

		console.log(paper);
	}


	handleDragOver(event){
		event.stopPropagation();
    	event.preventDefault();
   		event.originalEvent.dataTransfer.dropEffect = 'copy';
	}

	handleDrop(event){
		event.stopPropagation();
    	event.preventDefault();
    	let images = event.originalEvent.dataTransfer.files; // FileList object

    	for (let f of images) {
 			let reader = new FileReader();
			reader.onload = (event) => {
		     	var raster = new paper.Raster({
					source: event.target.result,
					position: paper.view.center
				});
		    }
		    // Read in the image file as a data URL.
		    reader.readAsDataURL(f);
    	}
	}
}


