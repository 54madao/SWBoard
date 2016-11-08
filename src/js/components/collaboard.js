import React from 'react';

export default class Login extends React.Component {
	constructor(props) {
        super(props);
        this.state = getTodoState();
    }

    componentDidMount() {
        TodoStore.addChangeListener(this.onChange.bind(this));
    }

    componentWillUnmount() {
        TodoStore.removeChangeListener(this.onChange.bind(this));
    }

    onChange() {
        this.setState(getTodoState());
    }

    render() {
        return (
            <div>
                <Header />
                <MainSection
                  allTodos={this.state.allTodos}
                  areAllComplete={this.state.areAllComplete}
                />
            </div>
        );
    }

}

function getTodoState() {
    return {
        allTodos: TodoStore.getAll()
    };
}