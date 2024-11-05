import { useEffect, useState } from 'react'
import './App.css'
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";


function App() {
  const [isCompleteScreen, setIscompleteScreen] = useState(false);
  const [allTodos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newdescription, setNewdescription] = useState('');
  const [completedTodos,setCompletedTodos] = useState([]);
  const [currentEdit, setCurrentEdit] = useState("");
  const [currentEditedItem, setCurrentEditedItem] = useState("");

  const handleAddTodo = () => {

    if (!newTitle || !newdescription) {
      alert("Please fill in both fields.");
      return;
    }

    let newTodoItem = {
      title: newTitle,
      description: newdescription,
    }

    let updatedTodoArr = [...allTodos];  
    updatedTodoArr.push(newTodoItem);
    setTodos(updatedTodoArr);
    localStorage.setItem('todolist',JSON.stringify(updatedTodoArr))
    setNewTitle("");
    setNewdescription("");
  };
  const handleDeleteTodo = (index) => {
    let reducedTodo = [...allTodos];
    reducedTodo.splice(index,1);
    setTodos(reducedTodo);
    localStorage.setItem('todolist',JSON.stringify (reducedTodo));
  }

  const handleComplete = (index) => {
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth() + 1;
    let yyyy = now.getFullYear();
    let hh = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    let completedOn = dd + '-' +  mm + '-' + yyyy + ' at  ' + hh + ':' + min + ':' + sec;
    let filteredItem = {
      ...allTodos[index],
      completedOn:completedOn
    }
    let updatedCompletedArr = [...completedTodos];
    updatedCompletedArr.push(filteredItem);
    setCompletedTodos(updatedCompletedArr);
    handleDeleteTodo(index);
    localStorage.setItem('completedTodos',JSON.stringify (updatedCompletedArr));
  }

  const handleDeleteCompletedTodo = (index) => {
    let reducedTodo = [...completedTodos];
    reducedTodo.splice(index,1);
    localStorage.setItem('completedTodos',JSON.stringify (reducedTodo));
    setCompletedTodos(reducedTodo);
  }

  useEffect(() => {
    let savedTodo = JSON.parse(localStorage.getItem('todolist'));
    let savedCompletedTodo = JSON.parse(localStorage.getItem('completedTodos'));
    if(savedTodo){
      setTodos(savedTodo);
    }

    if(savedCompletedTodo){
      setCompletedTodos(savedCompletedTodo);
    }
  },[]);

  const handleEdit = (ind,item) => {
    console.log(ind);
    setCurrentEdit(ind);
    setCurrentEditedItem(item);
  }

  const handleUpdatedTitle = (value) => {
    setCurrentEditedItem((prev) => {
      return {...prev,title:value}
    })
  }
  const handleUpdatedDescription = (value) => {
    setCurrentEditedItem((prev) => {
      return {...prev,description:value}
    })
  }

  const handleUpdatedTodo = () => {
    if (!currentEditedItem.title || !currentEditedItem.description) {
      alert("Please fill in both fields before updating.");
      return;
    }

    let newTodo = [...allTodos];
    newTodo[currentEdit] = currentEditedItem;
    setTodos(newTodo);
    setCurrentEdit("");
    setCurrentEditedItem("");
    newTitle(""),
    setNewdescription("")
    localStorage.setItem('todolist',JSON.stringify (newTodo));
  }

  return (
    <>
      <div className="App">

      <h1 className='heading'>Todo App</h1>

      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label htmlFor="">Title</label>
            <input type="text" placeholder="What`s the task title?" value={newTitle} onChange={(e) => setNewTitle(e.target.value)}/>
          </div>
          <div className="todo-input-item"> 
            <label htmlFor="">Description</label>
            <input type="text" placeholder="What`s the task Description?" value={newdescription} onChange={(e) => setNewdescription(e.target.value)}/>
          </div>
          <div className="todo-input-item">
            <button type='button' className='primarybtn' onClick={handleAddTodo}>Add</button>
          </div>
        </div>
        <div className="btn-area">
        <button className={`secondaryBtn ${isCompleteScreen === false && 'active'}`} onClick={() => setIscompleteScreen(false)}>Todo</button>
        <button className={`secondaryBtn ${isCompleteScreen === true && 'active'}`} onClick={() => setIscompleteScreen(true)}>Completed</button>
        </div>
      
      <div className="todo-list">
        {isCompleteScreen === false && allTodos.map((item, index) => {
        if (currentEdit===index){
          return (
            <div className="edit__wrapper" key={index}>
            <input type="text" placeholder='Updated Title' onChange={(e) => handleUpdatedTitle(e.target.value)} value={currentEditedItem.title}/>
            <textarea name="" id="" placeholder='Updated Title' onChange={(e) => handleUpdatedDescription(e.target.value)} value={currentEditedItem.description} rows={3}></textarea>
            <button type='button' className='primarybtn' onClick={handleUpdatedTodo}>Update</button>
          </div>
          )
        }else{
          return (
            <div className="todo-list-item" key={index}>
            <div className="">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            </div>
            <div className="todo-list-item-icons">
            <AiOutlineDelete className='icon' onClick={() => handleDeleteTodo(index)} title="Delete"/>
            <BsCheckLg className='check-icon' onClick={() => handleComplete(index)} title="Complete?"/>  
            <AiOutlineEdit className='edit-icon' onClick={() => handleEdit(index,item)} title="Edit"/>
            </div>
          </div>
          )}
        })}
        {isCompleteScreen === true && completedTodos.map ((item, index) => {
            return (
              <div className="todo-list-item" key={index}>
              <div className="">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p><small>Copmpleted on: {item.completedOn} {}</small></p>
              </div>
              <div className="todo-list-item-icons">
              <AiOutlineDelete className='icon' onClick={() => handleDeleteCompletedTodo(index)} title="Delete"/>
              </div>
            </div>
            )
          }
        )}
      </div>
      </div>
      </div>
    </>
  )
}

export default App
