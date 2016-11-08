import {Dispatcher} from 'flux';

let AppDispatcher = new class DispatcherClass extends Dispatcher{
	handleViewAction(action) {
    	this.dispatch({
    		source: 'VIEW_ACTION',
	    	action: action,
	    });
	}

	handleServerAction(action) {
	    this.dispatch({
	    	source: 'SERVER_ACTION',
	      	action: action,
	    });
	}
}

export default AppDispatcher;