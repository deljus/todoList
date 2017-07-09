import React, {Component} from 'react';
import {connect} from 'react-redux'
import {completeTask, deleteTask, editTask} from '../actions/index';
import {DropdownButton, MenuItem, Col, Thumbnail, Button} from 'react-bootstrap';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editTask: false
        };
        this.triggerTask = this.triggerTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.editTask = this.editTask.bind(this);
        this.changeTask = this.changeTask.bind(this);
    }

    triggerTask() {
        this.props.dispatch(completeTask(this.props.id));
    }

    deleteTask() {
        this.props.dispatch(deleteTask(this.props.id));
    }

    changeTask(event) {
        this.props.dispatch(editTask(this.props.id, event.target.value));
        this.setState({editTask: false});
    }

    editTask(event) {
        event.preventDefault();
        this.setState({editTask: true});
    }

    render() {
        let textView,
            statusTask;

        if (this.state.editTask) {
            textView = <textarea id={ this.props.id }
                          className="textarea form-control"
                          rows={1} onBlur={this.changeTask}
                          defaultValue={this.props.text}
                          autoFocus>
                        </textarea>;
        }
        else {
            textView = <a href="#"
                          onClick={this.editTask}
                          className="text">
                            { this.props.text }
                        </a>;
        }
        if(this.props.completed){
            statusTask = <span className="task task-closed">[Closed task]</span>;
        }else{
            statusTask = <span className="task task-active">[Active task]</span>;
        }

        return (
            <Col xs={12} sm={6}>

                <Thumbnail>
                    <h3>Task #{ this.props.id } </h3>
                    <p>
                        { textView }
                    </p>
                        { statusTask }
                    <p className="text-right">
                        <Button bsStyle="primary" onClick={ this.editTask }>Edit</Button>
                        <DropdownButton title="" id="edit">
                            <MenuItem eventKey="2"
                                      onClick={ this.triggerTask }>
                                {(!this.props.completed) ? "Close task" : "Activate task" }
                            </MenuItem>
                            <MenuItem divider/>
                            <MenuItem eventKey="4" onClick={ this.deleteTask }>Delete task</MenuItem>
                        </DropdownButton>
                    </p>
                </Thumbnail>
            </Col>
        )
    }
}

export default connect()(TodoItem);