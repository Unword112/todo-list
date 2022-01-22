import React, { useState } from 'react';
import { View, Button, TextInput } from 'react-native'
import style from './style';

const ToDoForm = ({ addTask,  handleFilter}) => {
    const [ userInput, setUserInput ] = useState('')
    
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput('')
    }

    return(
        <>
            <View style={ style.searchInput }>
                <TextInput value={userInput} type="text" onChange={handleChange} placeholder="Endter task..." />
                <Button title='Submit' onPress={handleSubmit} />
                <View style={{ marginLeft: 10 }}>
                <Button title='Clear Complete' onPress={handleFilter} />
                </View>
            </View>
        </>
        
    )
}

export default ToDoForm