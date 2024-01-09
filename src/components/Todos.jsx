import React from 'react'
import { useEffect, useState } from 'react'
import { readTodos } from '../utils'
import List from '@mui/material/List';
import { Todo } from './Todo';
import { AddNewItem } from './AddNewItem';

export const Todos = () => {
    const [todos,setTodos]=useState([])

    useEffect(()=>{
       const unsubscribe=readTodos(setTodos)
       return ()=>unsubscribe
    },[])

   console.log(todos);
    return (
        <div>
            <AddNewItem />
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {todos.map(obj=><Todo key={obj.id} {...obj}/>)}
            </List>
             
        
        </div>
    )
}

