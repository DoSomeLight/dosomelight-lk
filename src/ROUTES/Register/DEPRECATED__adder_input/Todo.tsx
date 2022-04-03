import React, { useEffect, useRef, useState } from 'react'
import ValidateDevs from './validation_devs'
import IconLabelButtons from './buttons'
// function usePrevious(value) {
//   const ref = useRef();
//   useEffect(() => {
//     ref.current = value;
//   });
//   return ref.current;
// }

// function handleChange(e: any) {
//   setNewName(e.target.value);
// }

export default function Todo(props: any) {
	// const [isEditing, setEditing] = useState(false);
	const [newName, setNewName] = useState('')

	const editFieldRef = useRef(null)
	// const editButtonRef = useRef(null);

	// const wasEditing = usePrevious(isEditing);

	// function handleSubmit(e) {//!
	//   e.preventDefault();
	//   if (!newName.trim()) {
	//     return;
	//   }
	//   props.editTask(props.id, newName);
	//   setNewName("");
	//   setEditing(false);
	// }

	// const editingTemplate = (
	//   <form className="stack-small" onSubmit={handleSubmit}>
	//     <div className="form-group">
	//       <label className="todo-label" htmlFor={props.id}>
	//         New name for {props.name}
	//       </label>
	//       <input
	//         id={props.id}
	//         className="todo-text"
	//         type="text"
	//         value={newName || props.name}
	//         onChange={handleChange}
	//         ref={editFieldRef}
	//       />
	//     </div>
	//     <div className="btn-group">

	//       <button
	//         type="button"
	//         className="btn todo-cancel"
	//         onClick={() => setEditing(false)}
	//       >
	//         Cancel
	//         <span className="visually-hidden">renaming {props.name}</span>
	//       </button>
	//       <button type="submit" className="btn btn__primary todo-edit">
	//         Save
	//         <span className="visually-hidden">new name for {props.name}</span>
	//       </button>
	//     </div>
	//   </form>
	// );

	return (
		<li className="strs">
			<div
			//className="stack-small"
			>
				{/* <input
          id={props.id}
          type="text"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        /> */}
				{/* <input value={props.name} /> */}
				<table>
					<tr>
						<td>
							<ValidateDevs
								id={props.id}
								ee=" "
								// label={"lll"}
								// // className="todo-text"
								// // type="text"
								// value={newName || props.name}
								// onChange={handleChange}
								// ref={editFieldRef}
							/>
						</td>
						<td>
							<IconLabelButtons
								// type="button"
								// className="btn btn__danger"
								onClick={() =>
									props.deleteTask(props.id)
								}
							/>
						</td>
					</tr>
				</table>

				{/* <button
        type="button"
        className="btn"
        onClick={() => setEditing(true)}
        ref={editButtonRef}
        >
          Edit <span >{props.name}</span>
        </button> */}
			</div>
		</li>
	)
}
