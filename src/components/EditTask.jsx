import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllTasks, updateTask } from '../store/taskSlice';

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const tasks = useSelector(selectAllTasks);
  const task = tasks.find((task) => task.id === parseInt(id));

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [assignee, setAssignee] = useState('');
  const [priority, setPriority] = useState('');
  const [status, setStatus] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setAssignee(task.assignee);
      setPriority(task.priority);
      setStatus(task.status);
    }
  }, [task]);

  const handleUpdate = () => {
    dispatch(updateTask({
      id: task.id,
      title,
      description,
      assignee,
      priority,
      status,
    }));
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      navigate('/');
    }, 2000);
  };

  if (!task) {
    return <p className="text-center mt-10 text-red-500">Task not found</p>;
  }

  return (
    <div className="w-[70%] pt-20 mx-auto mt-10 relative">
      <h2 className="text-3xl font-bold mb-6 text-center">Edit Task</h2>

      {showPopup && (
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-2 rounded shadow-lg transition-all duration-300 z-50">
          Task updated successfully!
        </div>
      )}

      <div className="flex flex-col gap-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task Title"
          className="p-2 border rounded"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task Description"
          className="p-2 border rounded"
        />
        <input
          type="text"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
          placeholder="Assignee"
          className="p-2 border rounded"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">Priority</option>
          <option value="P0">P0</option>
          <option value="P1">P1</option>
          <option value="P2">P2</option>
        </select>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        <button
          onClick={handleUpdate}
          className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
        >
          Update Task
        </button>
      </div>
    </div>
  );
};

export default EditTask;
