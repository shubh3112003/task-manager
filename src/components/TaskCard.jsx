import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleTaskCompleted, removeTask } from '../store/taskSlice';
import { useState } from "react";
import { Link } from "react-router-dom";

const TaskCard = ({
    id,
    title,
    description,
    startDate,
    endDate,
    status,
    priority,
    assignee,
}) => {
    const [complete, setComplete] = useState(false);
    const dispatch = useDispatch();

    const getDate = (dateString) => {
        const dateObject = new Date(dateString);
        return dateObject.toLocaleDateString();
    };

    const startDatee = getDate(startDate);
    const endDatee = getDate(endDate);

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
        setComplete(true);
    };

    const handleDelete = () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this task?");
        if (confirmDelete) {
            dispatch(removeTask(id));
        }
    };

    return (
        <div className="flex flex-col justify-between gap-4 w-[300px] max-h-[480px] rounded-xl bg-white shadow-xl border p-4">
            {/* Header */}
            <div className={`rounded-lg p-4 ${getStatusColor(status)} shadow-md`}>
                <h1 className="text-sm text-end font-semibold">{priority}</h1>
                <h1 className="text-xl text-center font-bold mt-2">{title}</h1>
            </div>

            {/* Description */}
            <div className="text-center px-2">
                <p className="text-sm">{description}</p>

                {/* Dates */}
                <div className="flex justify-between mt-4 text-sm font-medium">
                    <div className="flex flex-col items-start">
                        <span className="font-semibold">Start Date</span>
                        <span className="font-light">{startDatee}</span>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="font-semibold">End Date</span>
                        <span className="font-light">{endDatee}</span>
                    </div>
                </div>

                {/* Assignee and Task ID */}
                <div className="flex flex-col items-start text-left mt-3 text-sm">
                    <span><span className="font-semibold">Assignee:</span> {assignee || 'Unassigned'}</span>
                    <span><span className="font-semibold">Task ID:</span> {id}</span>
                </div>
            </div>

            {/* Buttons */}
            <div>
            <div className="flex gap-2 mt-4">
                <button
                    onClick={handleDelete}
                    className="w-1/2 bg-red-500 text-white text-sm px-3 py-2 rounded hover:bg-red-600"
                >
                    Delete
                </button>

                <Link to={`/edit/${id}`} className="w-1/2">
                    <button className="w-full bg-blue-500 text-white text-sm px-3 py-2 rounded hover:bg-blue-600">
                        Edit
                    </button>
                </Link>
            </div>

            <button
                onClick={handleToggleCompleted}
                type="button"
                className={`w-full mt-2 text-sm font-bold uppercase rounded py-2 px-3 shadow-md transition-all ${complete
                    ? 'bg-green-200 text-green-800'
                    : getStatusColor(status)
                    }`}
                disabled={status.toLowerCase() === 'completed'}
            >
                {status.toLowerCase() === 'completed' ? 'Completed' : 'Mark as Completed'}
            </button>
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
