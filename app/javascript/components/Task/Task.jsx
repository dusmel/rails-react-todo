import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import { Button, Icon, Modal, Form } from 'semantic-ui-react';
import { changeGreeting } from '../../actions/changeGreeting';
import { fetchTasks, createTask } from '../../actions/task';
import './task.scss';
import profile from '../../../assets/images/profile-boy.png';

class Task extends Component {
  state = {
    open: false,
    loading: false,
  };

  componentDidMount() {
    const { onFetchTasks } = this.props;
    onFetchTasks();
  }

  show = size => () => this.setState({ size, open: true });

  close = () => this.setState({ open: false });

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  onSubmit = async () => {
    this.setState({ loading: true });
    const { onCreateTask } = this.props;
    const { title, description } = this.state;
    await onCreateTask({ title, description });
    this.setState({ loading: false });
    this.close();
  };

  render() {
    const { open, size, loading } = this.state;
    const {
      task: { data = [] },
    } = this.props;
    // console.log(tasks)
    return (
      <div id="task" className="container">
        <div className="row">
          <div className="col-md-7 mx-auto">
            <div className="wrapper">
              <img src={profile} alt="profile" className="profile-img" />
              <div className="create">
                <div className="left">
                  <h4>Create a new task</h4>
                  <span className="date text-muted">{moment().format('MMMM Do YYYY')}</span>
                </div>
                <div className="right">
                  <Button
                    color="brown"
                    icon="plus"
                    content="Add"
                    onClick={this.show('tiny')}
                    labelPosition="right"
                  />
                </div>
              </div>
              <div className="items">
                <div className="row">
                  {data.map(({ title, description }) => {
                    return (
                      <div className="col-md-4 ">
                        <div className="task-item">
                          <div className="title">
                            <h6>{title}</h6>
                            <Icon name="circle outline" color="teal" />
                          </div>
                          <hr />
                          <div className="details">
                            <p>{description}</p>
                            <Icon name="pencil alternate" />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal size={size} open={open} onClose={this.close}>
          <Modal.Header>Add a new task</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Input
                fluid
                label="Title"
                name="title"
                placeholder="Title"
                onChange={this.handleChange}
              />
              <Form.TextArea
                label="Description"
                name="description"
                placeholder="Tell us more ..."
                onChange={this.handleChange}
              />
              <Form.Button
                color="brown"
                loading={loading}
                icon="certificate"
                content="Submit"
                labelPosition="right"
                onClick={this.onSubmit}
              />
            </Form>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

Task.propTypes = {
  task: PropTypes.array.isRequired,
  onFetchTasks: PropTypes.func.isRequired,
  onCreateTask: PropTypes.func.isRequired,
};
const mapStateToProps = ({ task }) => {
  return {
    task,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeName: greeting => dispatch(changeGreeting(greeting)),
    onFetchTasks: () => dispatch(fetchTasks()),
    onCreateTask: data => dispatch(createTask(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Task);
