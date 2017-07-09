import React, { Component } from 'react';
import TodoItem from './TaskItemForm';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap';
import * as display from '../constants/displayTasks';
import * as sort from '../constants/sortingTask';

const compareNumeric = (a, b) => (
    (a.id > b.id) ? 1: -1
);

const getVisibleTasks = (tasks, filter) => {
    switch (filter) {
        case display.SHOW_ALL:
            return tasks.filter(t => t);
        case display.SHOW_COMPLETED:
            return tasks.filter(t => t.completed);
        case display.SHOW_ACTIVE:
            return tasks.filter(t => !t.completed);
        default:
            throw new Error('Unknown filter: ' + filter)
    }
};

const getFilterTask = (tasks, filter) => {
    switch (filter) {
        case sort.ASCENDING:
            return tasks.sort(compareNumeric);
        case sort.DESCENDING:
            return tasks.sort(!compareNumeric);
        default:
            throw new Error('Unknown filter: ' + filter)
    }
};

const mapStateToProps = (state) => {
    let visibleTask = getVisibleTasks(state.tasks, state.visibleFilter);
    return{
        tasks: getFilterTask(visibleTask, state.sortFilter)
    }
};

class TaskList extends Component {
    render() {
        return (
            <Row>
                {this.props.tasks.map(task => (
                 <TodoItem key={task.id} {...task} />
                ))}
            </Row>
        )
    }
}

export default connect(mapStateToProps)(TaskList);