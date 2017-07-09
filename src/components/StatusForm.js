import React, {Component} from 'react';
import { Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap';
import { typeDisplayTasks } from '../constants/displayTasks'
import { typeSortingTask } from '../constants/sortingTask'

const mapStateToProps = (state) => ({
    filter: state.visibleFilter,
    sort: state.sortFilter
});

class StatusForm extends Component {
    render() {
        return (
            <Row>
                <Panel>
                    Show {typeDisplayTasks[this.props.filter]}, sort {typeSortingTask[this.props.sort]}
                </Panel>
            </Row>
        )
    }
}

export default connect(mapStateToProps)(StatusForm);