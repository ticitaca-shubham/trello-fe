import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import FormPopup from './components/FormPopup';
import Edit from './components/Edit';
import { nanoid } from 'nanoid';
import { DragDropContext } from 'react-beautiful-dnd';

function App() {
  const [display, setDisplay] = React.useState(false);
  const [editDisplay, setEditDisplay] = React.useState(false)
  const [todos, setTodos] = React.useState(() => {
    const items = localStorage.getItem("myCat")
    if (!items) { return [] }
    return JSON.parse(items)
  })

  const [todoId, setTodoId] = React.useState((todos[0]?.id) || "")

  React.useEffect(() => {
    console.log('use effect hook has been called')
    localStorage.setItem("myCat", JSON.stringify(todos));
    // setTodos(JSON.parse(localStorage.getItem("myCat")))
  }, [todos]);

  function handleClick() {
    setDisplay(display => !display)
  }

  function updateTodo(formData) {
    setTodos((prevData) => ([...prevData, {
      id: nanoid(),
      title: formData.title,
      description: formData.description,
      status: formData.status
    }]))
  }
  function editTodo(formData) {
    console.log('the edit todo function has been called', todoId)
    setTodos(oldTodos => {
      const newArray = []
      for (let i = 0; i < oldTodos.length; i++) {
        const oldTodo = oldTodos[i]
        if (oldTodo.id === todoId) {
          // Put the most recently-modified note at the top
          newArray.unshift(formData)
        } else {
          newArray.push(oldTodo)
        }
      }
      return newArray
    })
  }
  const currentTodo =
    todos.find(todo => todo.id === todoId)
    || todos[0]

  const handleDragEnd = (result) => {
    // Logic to handle drag end if needed
  };
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className='flex'>
        <Sidebar />
        <div className='w-full'>
          <Header handleClick={handleClick} />
          <Main todos={todos} setTodoId={setTodoId} editTodo={editTodo} setEditDisplay={setEditDisplay} />
          {display &&
            <FormPopup
              setDisplay={setDisplay}
              updateTodo={updateTodo}
            />
          }
          {
            editDisplay &&
            <Edit todo={currentTodo} setEditDisplay={setEditDisplay} editTodo={editTodo} />
          }
        </div>
      </div>
    </DragDropContext>
  );
}

export default App;