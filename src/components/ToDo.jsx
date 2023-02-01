import React, { useState, useEffect } from 'react';




/*Write a functional component that accepts two props
 — an array of tasks and a function to update
  the array.
  Each element in the array is an object w/ 2 fields:
   “task” and “subtasks”.
   The “task” field is associated with a string
    description and the “subtasks” field is 
    associated with an array of string descriptions.
   Example:
   [
 {
   task: "Clean bedroom",
   subtasks: ["Do laundry", "Organize desk", "Wipe floors"],
 },
 {
   task: "Study",
   subtasks: ["Review chemistry", "Do a React coding challenge"],
 },
]    */


/* Things needed for this exercise.....

√   import useState and useEffect from react
form with 2 input fields and 2 buttons.
    1 for primary task
    1 for listing subtasks
    1 button for "add subtask"
    1 button for submit

variable declared with empty object literal
variable declared with empty array literal
create an object from each task and subtasks submitted
Create an array named "TASKS"
push task object to "TASKS" array
click handler function for add subtask button
click handler function for submit button
div section to display tasks and subtasks
unordered list to display each task and corresponding subtasks
method to mark tasks/subtasks as complete
    create variable called completed that stores a 
    boolean value for each subtask. 
Pass in initial state using the useState hook

button to clear list of completed tasks 
    (only when all subtasks are also complete) 
*/

const ToDo = () => {
    //set initial state and initial variables
    const [text, setText] = useState([]);
    const [task, setTask] = useState(TASKS);
    const [subTask, setSubTask] = useState([]);
    //setting up initial TASK object
    const TASKS = [
        {
            task: "Clean bedroom",
            subtasks: ["Do laundry", "Organize desk", "Wipe floors"],
        },
        {
            task: "Study",
            subtasks: ["Review chemistry", "Do a React coding challenge"],
        },
        {
            task: "Build website",
            subtasks: ["Choose tech stack", "Design pages", "Develop", "Publish"],
        },
    ];



    const handleClick = () => {

    };

    const handleSubmit = () => {

    };

    const removeCompletedTasks = () => {

    };

    return (
        <>
            <h1 className='title' style={{

            }}>
                My To Do List</h1>
            <form>
                <div className='tasks' style={{
                    padding: "2rem"

                }}>
                    <label style={{
                        display: "flex",
                        flexDirection: "column",

                    }}>
                        Primary Task
                    </label>
                    <input
                        type="text"
                        placeholder='Enter primary task'
                        value={task}
                        onChange={(event) => setText(event.target.value)} />

                </div>
                <div className='subtasks' style={{
                    display: "flex",
                    flexDirection: 'column',
                    padding: "1rem",
                    maxWidth: "25%",

                }}>
                    <label>Sub-Tasks</label>
                    <input
                        type="text"
                        placeholder="Enter required sub-tasks"
                        value={subTask}
                        onChange={(event) => setSubTask(event.target.value)}
                    />

                    <button type="button"
                        style={{
                            backgroundColor: "blue",
                            color: "white",
                            borderRadius: ".5rem",
                            borderColor: "red",
                            borderWidth: "2px",
                            borderStyle: "solid",
                            marginTop: "0.5rem"

                        }}
                        onClick={(() => {
                            handleClick();
                        })}>Add sub-task</button>
                </div>
                <button type="button"
                    style={{
                        backgroundColor: "yellow",
                        borderRadius: ".5rem",
                        borderColor: "red",
                        borderWidth: "2px",
                        borderStyle: "solid",
                        marginTop: "0.5rem",
                    }}
                    onClick={((event) => {
                        handleSubmit();
                        setTask(event.target.value);
                    })}>Submit</button>
            </form>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <h2 className='title' style={{
                    textDecoration: "underline",

                }}>
                    Tasks</h2>
                <button type="button"
                    style={{
                        maxWidth: "20%",
                        backgroundColor: "red",
                        color: "white",
                        borderRadius: "0.25rem",
                    }}
                    onClick={removeCompletedTasks()}>Clear Completed Tasks</button>

                <ul>
                    <li>{task}</li>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                    }}>
                        <ul>
                            <li>{subTask}</li>
                            <label >
                                <input
                                    type="checkbox"
                                    label="completed"
                                    id="subTask1"
                                    value="false"
                                />
                                Completed
                            </label>
                        </ul>
                    </div>
                </ul>

            </div>

        </>
    );
};

export default ToDo;
