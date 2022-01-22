import React from 'react';
import { View } from 'react-native';

import style from './style';

import ToDo from './ToDo';
 
 
const ToDoList = ({ toDoList, handleToggle, handleFilter }) => {
   return (
       <>
       
           {toDoList.map(todo => {
               return (
                    <>
                    <View>
                        <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>       
                    </View>
                    </>
               )
           })}
       </>
   );
};

export default ToDoList;