import React from "react";
import { useState } from "react";

function Todo() 
{   
    const [task,setTask]=useState("")
    const [taskarr,settaskarr]=useState([]);
    const [editState,setEditState]=useState('false');
    const [saveItem,setSaveItem]=useState('')
    const add=()=>{
        if(task!=''){
       settaskarr([...taskarr,task]);
       console.log(taskarr)
       setTask('');
        }
    }
   function edit(key){
    let editElement=taskarr[key];
    console.log(editElement);
    
    setEditState('true');
    setTask(editElement);
    setSaveItem(editElement);
   
   }

    function dele(key){
     console.log(key);
     setEditState('false')
     setTask('')
     settaskarr((prev)=>{
        return prev.filter((arrele,ind)=>{
            return ind!==key;
        })
     })
    
    }
    const item=(event)=>{
        setTask(event.target.value);
        
    }
    const save=(event)=>{
       setTask(event.target.value);
       if(task!=""){
       taskarr.splice(taskarr.indexOf(saveItem),1,task);
       setEditState('false');
       setSaveItem('');
       }
       
       
       setTask('')
       return taskarr;
    }

	return (
	<div className="container">
        <h1>TO-DO LIST</h1>
	  <input type="text" id="task" value={task} onChange={item} ></input>
      {editState=='false' ?<input type="button" className="btn" id="btn" value="Add To-Do" onClick={add}></input> :<input type="button" className="btn" value="save" onClick={save}></input>}
     
      {taskarr.map((taskval,index)=>{
        return {taskval} && <li key={index} className="list"><span id="text">{index}{taskval}</span>
        
        <input  type="button" className="btn btn1 edit" value="edit" onClick={()=>edit(index)}></input>
        <input  type="button" className="btn btn1  delete" value="delete" onClick={()=>dele(index)}></input>
        </li>
      })}
	</div>
	);
}


export default Todo;