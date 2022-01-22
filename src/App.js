import React, { useState } from 'react'
import { View } from 'react-native'

import './App.css';
import style from './style';

//Data
import data from './data.json'

//components
import Header from './Header'
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList'

function App() {
  const [ toDoList, setToDoList ] = useState(data)

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id == id ? { ...task, complete: true } : { ...task}
    })
    setToDoList(mapped)
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete
    })
    setToDoList(filtered)
  }

  const addTask = (userInput) => {
    let copy = [...toDoList]
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false}]
    setToDoList(copy)
  }

  return (
    <>
      <View style={style.header}>
        <Header />
      </View>
      
      <View>
        <ToDoForm addTask={addTask} />
      </View>

      <View className="App" style={style.container}>
        <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
      </View>
    </>
  );
}

export default App;