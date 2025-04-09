import { GrTask } from "react-icons/gr";
import { MdDashboard, MdOutlineTaskAlt, MdAddTask, MdPendingActions, MdCloudDone, MdOutlineAccessTimeFilled, MdQueryStats } from "react-icons/md";
import { GrInProgress } from "react-icons/gr";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className= " flex flex-row bg-blue-600 sm:min-h-10 h-20 w-full   top-0 roboto-regular">
            <div className="flex w-full items-center pl-4 justify-start  h-16 text-white text-xl font-bold mt-2">
                <GrTask />
                <span className='sm:block hidden '>
                {'\u00A0'}Task{'\u00A0'}Manager
                </span>
            </div>
            <nav className="flex gap-10 justify-start">
                <ul className="py-6 flex flex-row justify-start">
                    <Link to='/' className="px-6 py-4 font-semibold text-lg text-gray-300 hover:text-gray-700 cursor-pointer flex justify-start items-center gap-2">
                        <MdDashboard className="text-xl" />
                        <span className='sm:block hidden'>

                            Dashboard
                        </span>
                    </Link>
                    <Link to='/completeTask' className="px-6 py-4 font-semibold text-lg text-gray-300 hover:text-gray-700 cursor-pointer flex justify-start items-center gap-2">
                        <MdOutlineTaskAlt className="text-xl" />
                        <span className='sm:block hidden'>

                            Completed{'\u00A0'}Tasks

                        </span>
                    </Link>
                    <Link to='/pendingTask' className="px-6 py-4 font-semibold text-lg text-gray-300 hover:text-gray-700 cursor-pointer flex justify-start items-center gap-2">
                        <MdPendingActions className="text-xl" />
                        <span className='sm:block hidden'>

                            Pending{'\u00A0'}Tasks

                        </span>
                    </Link>
                    <Link to='/inProgressTask' className="px-6 py-4 font-semibold text-lg text-gray-300 hover:text-gray-700 cursor-pointer flex justify-start items-center gap-2">
                        <GrInProgress className="text-xl" />
                        <span className='sm:block hidden'>

                            In{'\u00A0'}Progress{'\u00A0'}Tasks

                        </span>
                    </Link>
                    

                    <Link to='/addTask' className="px-6 py-4 font-semibold text-lg text-gray-300 hover:text-gray-700 cursor-pointer flex justify-start items-center gap-2">
                        <MdAddTask className="text-xl" />
                        <span className='sm:block hidden'>

                            Add{'\u00A0'}New{'\u00A0'}Tasks

                        </span>
                    </Link>
                    
                </ul>
            </nav>
        </div>
    );
};


export default Sidebar;