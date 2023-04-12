import React from 'react';
import { connect } from 'react-redux';
import Task from './task';

const ListTask = ({ tasks }) => {
  const doneTasks = tasks.filter((task) => task.isDone);
  const notDoneTasks = tasks.filter((task) => !task.isDone);

  return (
<>
  <h2 className="not-done-heading">Not Done:</h2>
  {notDoneTasks.length === 0 ? <p>No tasks left to do!</p> : null}
  <ul className="not-done-tasks">
    {notDoneTasks.map((task) => (
      <Task key={task.id} task={task} />
    ))}
  </ul>
  <h2 className="done-heading">Done:</h2>
  {doneTasks.length === 0 ? <p>No completed tasks yet!</p> : null}
  <ul className="done-tasks">
    {doneTasks.map((task) => (
      <Task key={task.id} task={task} />
    ))}
  </ul>
</>

  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

export default connect(mapStateToProps)(ListTask);