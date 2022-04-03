import React, { useState, useRef, useEffect } from 'react'
import { Form } from './Form'
//import FilterButton from "./components/FilterButton";
import Todo from './Todo'
// import { nanoid } from "nanoid";

let counter = 0

function usePrevious(value: any) {
	const ref = useRef()
	useEffect(() => {
		ref.current = value
	})
	return ref.current
}

const FILTER_MAP: any = {
	All: () => true
}

// const FILTER_NAMES = Object.keys(FILTER_MAP);

function AdderInputID(props: any) {
	const [tasks, setTasks] = useState(props.tasks)
	const [filter, setFilter] = useState('All')

	function toggleTaskCompleted(id: any) {
		const updatedTasks = tasks.map((task: any) => {
			// if this task has the same ID as the edited task
			if (id === task.id) {
				// use object spread to make a new obkect
				// whose `completed` prop has been inverted
				return { ...task, completed: !task.completed }
			}
			return task
		})
		setTasks(updatedTasks)
	}

	function deleteTask(id: any) {
		if (counter < 1) {
			return
		} else {
			counter--
			const remainingTasks = tasks.filter((task: any) => id !== task.id)
			setTasks(remainingTasks)
		}
	}

	function editTask(id: any, newName: any) {
		const editedTaskList = tasks.map((task: any) => {
			// if this task has the same ID as the edited task
			if (id === task.id) {
				//
				return { ...task, name: newName }
			}
			return task
		})
		setTasks(editedTaskList)
	}

	const taskList = tasks
		.filter(FILTER_MAP[filter])
		.map((task: any) => (
			<Todo
				id={task.id}
				name={task.name}
				completed={task.completed}
				key={task.id}
				toggleTaskCompleted={toggleTaskCompleted}
				deleteTask={deleteTask}
				editTask={editTask}
			/>
		))

	// const filterList = FILTER_NAMES.map(name => (
	//   <FilterButton
	//     key={name}
	//     name={name}
	//     isPressed={name === filter}
	//     setFilter={setFilter}
	//   />
	// ));

	function addTask(name: any) {
		if (counter > 4) {
			return
		} else {
			counter++
			const newTask = {
				id: 'str-' + counter,
				name: name,
				completed: false
			}
			setTasks([...tasks, newTask])
		}
	}

	// const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
	// const headingText = `${taskList.length} ${tasksNoun} remaining`;

	const listHeadingRef: any = useRef(null)
	const prevTaskLength: any = usePrevious(tasks.length)

	useEffect(() => {
		if (tasks.length - prevTaskLength === -1) {
			listHeadingRef.current.focus()
		}
	}, [tasks.length, prevTaskLength])

	return (
		<div className="centro">
			<Form addTask={addTask} />
			{/* <div className="filters btn-group stack-exception">
        {filterList}
      </div> */}
			<h2 id="list-heading" tabIndex={-1} ref={listHeadingRef}>
				{/* {headingText} */}
			</h2>
			<div
				role="list"
				// className="todo-list stack-large stack-exception"
				aria-labelledby="list-heading"
			>
				{taskList}
			</div>
		</div>
	)
}
export { counter, AdderInputID }
