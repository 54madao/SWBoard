'use strict'
// import paper from '../node_modules/paper/dist/paper-full.js';
// import saveAs from 'file-saver';

export default class Menu{
	constructor(elems){
		this._elems = elems;

		this._elems['menu'].find('#imageUpload').change((event) => this.uploadImage(event));
		this._elems['menu'].find('#exportImage').on('click', (event) => this.exportImage(event));
	}

	uploadImage(event){
		let images = event.target.files; // FileList object

    	for (let f of images) {
 			let reader = new FileReader();
			reader.onload = (event) => {
		     	let raster = new paper.Raster({
					source: event.target.result,
					position: paper.view.center
				});
		    }
		    // Read in the image file as a data URL.
		    reader.readAsDataURL(f);
    	}
	}

	exportImage(event){
		let tempImg = paper.project.layers[0].rasterize();
		let data = tempImg.toDataURL();
		tempImg.remove();
		this._elems['canvas'][0].toBlob(function(blob) {
			fileSaver.saveAs(blob, 'export.png');
		});
	}
}