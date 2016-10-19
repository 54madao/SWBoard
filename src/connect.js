
 let conn = new class Connect{
	constructor(){
		this._peer = new Peer({key: 'h4vvvnumco50cnmi'});
		this._peer.on('open', (id) => this.open(id));
		this._peer.on('connection', (conn) => this.connection(conn));
		$('#connect').on('click', () => this.connect());
		this._connections = new Map();
		this._tools = {};
	}

	open(id){
		this._id = id;
		console.log(this._peer);
		console.log('My peer ID is: ' + this._id);
  		$('#myId').text('ID: ' + this._id);
	}

	connect(){
		let id = $('#peerId').val();
		let conn = this._peer.connect(id);
		conn.on('open', () => {
			console.log(conn);
			conn.on('data', (data) => {this.receive(data)});
			conn.serialization = 'json';
			this._connections.set(id, conn);
		});
	}

	connection(conn){
		conn.on('open', () => {
			console.log(conn);
			conn.on('data', (data) => {this.receive(data)});
			conn.serialization = 'json';
			this._connections.set(conn.peer, conn);
			conn.send({type:"sync", project: paper.project.exportJSON()});
		});
	}

	send(data){
		for(let [id, conn] of this._connections){
			if(conn != null && conn.open){
				conn.send(data);
			}
		}	
	}

	receive(data){
		if(data['type'] == 'action'){
			let tool = this._tools[data['tool']];
			tool.peerAction(data);
		}
		else{
			paper.project.importJSON(data['project']);
			console.log(paper);
		}
	}

	addCallBacks(name, tool){
		this._tools[name] = tool;
	}

	get peer(){return this._peer;}
	get id(){return this._id;}
}

export default conn;