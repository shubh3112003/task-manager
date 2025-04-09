
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleTaskCompleted } from '../store/taskSlice'
import { useState } from "react";
import { Link } from "react-router-dom";
import { removeTask } from "../store/taskSlice";
const TaskCard = ({
    id,
    title,
    description,
    startDate,
    endDate,
    status,
  
    priority,
}) => {
    const [complete, setComplete] = useState(false);
    const dispatch = useDispatch();
    const getDate = (dateString) => {
        const dateObject = new Date(dateString);
        const currentDate = dateObject.toLocaleDateString();
        return currentDate;
    };
    let startDatee = getDate(startDate);
    let endDatee = getDate(endDate);
    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case "completed":
                return "bg-green-200 text-green-800";
            case "in progress":
                return "bg-blue-200 text-blue-800";
            case "pending":
                return "bg-yellow-200 text-yellow-800";
            default:
                return "bg-white";
        }
    };

    const handleToggleCompleted = () => {
        dispatch(toggleTaskCompleted(id));
        setComplete(true)
    };

    const handleDelete = () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this task?");
        if (confirmDelete) {
          dispatch(removeTask(id));
        }
      };



    return (
        <div
            className={` flex flex-col rounded-xl justify-center gap-4 bg-white w-[300px] max-h-[410px] shadow-xl border`}
        >

            <div
                className={`relative bg-clip-border mt-6 ml-4 mr-4 rounded-lg ${getStatusColor(
                    status
                )} shadow-md h-45`}
            >
                <h1 className="anton-regular text-end pt-2 pr-3 text-sm">{`${priority}`}</h1>
                <h1 className="font-bold text-center text-xl py-4 mb-5 ubuntu-bold">{`${title}`}</h1>
            </div>
            <div className="border-0 p-2 text-center">
                <p className="poppins-light ">{`${description}`}</p>
                <div className="flex justify-between mt-[5px] text-sm font-semibold py-2 px-4">
                    <div className="flex justify-center flex-col">
                        <p>Start Date</p>
                        <p className="font-light">{`${startDatee}`}</p>
                    </div>
                    <div className="flex justify-center flex-col">
                        <p>End Date</p>
                        <p className="font-light">{`${endDatee}`}</p>
                    </div>
                </div>
            </div>
            <div className="footer p-3 flex items-center justify-between">
                <p className="font-light text-xs block text-black">{`John doe`}</p>
                <button
                    onClick={handleToggleCompleted}
                    type="button"
                    className={`flex items-center justify-center gap-2 text-black  select-none focus:outline-none shadow-md  uppercase font-bold text-xs py-2 px-6 rounded-lg ${complete
                        ? 'bg-green-200 text-green-800'
                        : `${getStatusColor(status)}`
                        }`}
                > {complete ? 'Completed' : `${status}`}</button>

            </div>
            <div className="border rounded p-4 shadow-md bg-white flex flex-row gap-2 ">
      <h3 className="text-xl font-semibold">{title}</h3>
      {/* ...rest of the task fields here */}

      <div className="flex gap-2 flex-row mt-2">
       <div>
        <button
          onClick={handleDelete}
          className="bg-red-500  text-white px-3  rounded hover:bg-red-600"
        >
          Delete
        </button></div>
      
      <Link to={`/edit/${id}`}>
  <button className="bg-blue-500  text-white px-2  rounded hover:bg-blue-600">Edit</button>
</Link></div>
    </div>



        </div>
    );
};


TaskCard.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    assignee: PropTypes.string,
    priority: PropTypes.string,
};

export default TaskCard;
