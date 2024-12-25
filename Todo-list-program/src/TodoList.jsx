import React, { useState } from "react";
function TodoList() {
	const [tasks, setTasks] = useState(["take shower", "play games", "do chores"]);
	const [newTask, setNewTask] = useState("");

	function handleInputChange(e) {
		setNewTask(e.target.value);
	}
	function addList() {
		if(newTask.trim()!=="")
		{
			setTasks(t=>[...t, newTask]);
			setNewTask("");
		}
	
	}
	function deleteList(index) {
		const updatedTasks = tasks.filter((_,i)=>i!==index);
		setTasks(updatedTasks);
	}
	function moveUp(index) {

		if(index>0)
		{
			const updatedTasks = [...tasks];
			[updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];
			setTasks(updatedTasks);
		}
	}
	function moveDown(index) {
		if(index<tasks.length-1)
			{
				const updatedTasks = [...tasks];
				[updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];
				setTasks(updatedTasks);
			}
	}
	return (
		<div className="to-do-list">
			<h1>To-Do-List</h1>
			<div>
				<input type="text" placeholder="Enter a task..."
					value={newTask}
					onChange={handleInputChange} />
				<button className="add-button"
					onClick={addList}>Add</button>
			</div>
			<ol>
				{tasks.map((task, index) =>
					<li key={index}>
						<span>{task}</span>
						<button className="delete-button"
							onClick={() => deleteList(index)}>
							Delete</button>
						<button className="up-button"
							onClick={() => moveUp(index)}>
							⬆️</button>
						<button className="down-button"
							onClick={() => moveDown(index)}>
							⬇️</button>

					</li>
				)}
			</ol>
		</div>
	);
}
export default TodoList