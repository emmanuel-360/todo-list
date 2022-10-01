import React, { useState, createContext } from 'react';

export const ListContext = createContext();


const ListContextProvider = (props) => {
    const [List, setList] = useState([
            {title: 'Positive affirmations', id: 1},
            {title: 'Get things done', id: 2},
            {title: 'Have some fun', id: 3},
            {title: 'Check up on a friend', id: 4}
        ]);
    const id = Math.random(Math.floor()* 100)
    
    function newTask(title){
        setList([...List, {title, id}])
    }

    function deleteTask (id) {
        const filterTask = List.filter(List => { return List.id !== id});
        setList(filterTask);
        console.log(id)
    };
    
    
    return(
        <ListContext.Provider value={{List, newTask, deleteTask}}>
            {props.children}
        </ListContext.Provider>
    );

}

export default ListContextProvider;

