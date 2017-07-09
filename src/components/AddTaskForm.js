import React, {Component} from 'react';
import {connect} from 'react-redux';
import { addTask, displayTasks, sortTask } from '../actions'
import {
    InputGroup,
    MenuItem,
    DropdownButton,
    FormControl,
    Button
} from 'react-bootstrap';


class AddTaskForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: ''
        };
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    addTask(event){
        let value = this.state.value;
        if(value){
            this.props.dispatch(addTask(value));
            this.setState({value: ""});
        }
        event.preventDefault();
    }

    showTask(value){
        this.props.dispatch(displayTasks(value));
    }

    sortTask(value){
        this.props.dispatch(sortTask(value))
    }

    render() {
        return (
            <div className="row">
                <ul className="list-group">
                    <form onSubmit={this.addTask.bind(this)}>
                        <InputGroup >
                            <FormControl type="text" value={this.state.value} onChange={this.handleChange.bind(this)}/>
                            <InputGroup.Button>
                                <Button type="submit">Add task</Button>
                            </InputGroup.Button>
                            <DropdownButton
                                componentClass={InputGroup.Button}
                                title="Show"
                                id="add_task"
                            >
                                <MenuItem key="1" onClick={this.showTask.bind(this,'SHOW_ACTIVE')}>Active tasks</MenuItem>
                                <MenuItem key="2" onClick={this.showTask.bind(this,'SHOW_COMPLETED')}>Closed tasks</MenuItem>
                                <MenuItem key="3" onClick={this.showTask.bind(this,'SHOW_ALL')}>All tasks</MenuItem>
                            </DropdownButton>
                            <DropdownButton
                                componentClass={InputGroup.Button}
                                title="Sort"
                                id="sort_task"
                            >
                                <MenuItem key="5" onClick={this.sortTask.bind(this,'ASCENDING')}>Ascending</MenuItem>
                                <MenuItem key="6" onClick={this.sortTask.bind(this,'DESCENDING')}>Descending</MenuItem>
                            </DropdownButton>
                        </InputGroup>
                    </form>
                </ul>
            </div>
        )
    }
}

export default connect()(AddTaskForm);