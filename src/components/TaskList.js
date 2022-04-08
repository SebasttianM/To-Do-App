import React from 'react'

const TaskList = () => {
  return (
      <div className="border-2 border-red-400 flex justify-center h-auto " id='tasklist'>
          <div className="border-2 border-blue-700 w-1/3  text-center flex flex-col  -mt-8 mb-20 h-auto leading-3" id='taskcards'>
              <div className="border-2 border-green-800  mx-auto my-2 w-10/12 h-9 text-center leading-6 flex justify-between " id='card'>
                  <div>

                  <input type="checkbox" className=''/>
                  <label className=''>First Task</label>
                  </div>
                  <span>X</span>
              </div>
            <div className='border-2 border-violet-400 w-11/12 mx-auto my-4 flex justify-between'>
               <p>Items</p>
               <p>Clear</p>
            </div>
          
          </div>
      </div>
  );
}

export default TaskList