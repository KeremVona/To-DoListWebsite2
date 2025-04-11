import { useEffect, useState } from 'react'
import './App.css'
import ToDos from './components/ToDos';

function App() {
  const [input, setInput] = useState("");
  const [toDos, setToDos] = useState([
    
  ]);
  const [editingToDoId, setEditingToDoId] = useState();
  const [editInput, setEditInput] = useState();

  useEffect(() => {
    const savedToDos = JSON.parse(localStorage.getItem("toDos"));
    if (savedToDos) {
      console.log(`Loaded from storage: ${savedToDos}`);
      setToDos(savedToDos);
    }
  }, []);

  useEffect(() => {
    if (toDos.length > 0) {
      console.log(`Saving to localstorage: ${toDos}`);
      localStorage.setItem("toDos", JSON.stringify(toDos));
    }
    else {
      localStorage.removeItem("toDos");
    }
  }, [toDos]);  

  function handleChange(value) {
      setInput(value);
      console.log(`The input: ${value}`);
    
  }

  function handleClick() {
    if (input) {
      console.log(`The total value: ${input}`);
      setToDos([...toDos, {id: Date.now(), name: input}]);
      setInput("");
    }
  }

  function handleSave(index) {
    if (editInput) {
      console.log(`The total edit value: ${editInput}`);

      const updatedToDos = toDos.map((toDo) => {
        if (toDo.id === index) {
          return { ...toDo, name: editInput };
        }
        return toDo;
      });
      setToDos(updatedToDos);

      setEditInput("");
      setEditingToDoId(null);
    }
  }

  function handleOnDelete(index) {
    const newToDos = toDos.filter((l) => l.id !== index);
    setToDos(newToDos);
  }

  function handleOnEdit(index) {
    setEditingToDoId(index);
  }

  function handleChange2(valueForSave) {
    setEditInput(valueForSave);
    console.log(`The edit input: ${valueForSave}`);
  }

  // onSave, handleChange2

  return (
    <>      
      <h1 className='text-5xl flex justify-center'>To-Do List Website 2</h1>
      <div className='flex flex-col'>
       <div className='flex flex-row justify-center mb-4 mt-10' id='input-container'>
         <input value={input} onChange={(e) => handleChange(e.target.value)} className='basis-128 mr-4 p-3 bg-amber-200 text-xl' type="text" placeholder='Add new task...' />
         <button onClick={handleClick} className='basis-32 bg-amber-300 text-xl'>Add</button>    
       </div>
       <hr className='mb-2' />
           <ToDos toDos={toDos} onEdit={handleOnEdit} onDelete={handleOnDelete} editInput={editInput} editId={editingToDoId} onSave={handleSave} handleChange2={handleChange2} />
      </div>
    </>
  )
}

export default App
