import React, { isValidElement } from 'react'

export default function ToDos({ toDos, onDelete, onEdit, editInput, editId, onSave, handleChange2 }) {
  let toDos2;  
  if (toDos) {
      toDos2 = (<ul className='flex flex-col'>
        
        {toDos.map((task) => (
        <div className='bg-amber-100 p-4'>
        <div className='flex flex-row mb-2 bg-amber-200 basis-32' key={task.id}>
          {task.id === editId ? <> 
            <input className='flex justify-center p-4 text-xl flex-90' type="text" value={editInput} onChange={(e) => handleChange2(e.target.value)} placeholder='Edit...' />
            <button className='bg-amber-300 text-xl flex flex-20 justify-center items-center mr-2' onClick={() => onSave(task.id)}>Save</button>
          </>
          : <>
              <li className='flex justify-center p-4 text-xl flex-90'>{task.name}</li>
              <button onClick={() => onEdit(task.id)} className='bg-amber-300 text-xl flex flex-20 justify-center items-center mr-2'>Edit</button>
            </>}
          <button onClick={() => onDelete(task.id)} className='bg-amber-300 text-xl flex flex-20 justify-center items-center'>Delete</button>
        </div>
        </div>
        ))
        
        }
        
        </ul>);
    }

  return toDos2;

}
