

import React from 'react'

export default function Main(){
    
    const[data, setdata] = React.useState([])
    
    const[text, settext] = React.useState("")
    
    function Click(){
       setdata(pre => (
           
          [...pre, text] 
       )) 
        
        
    }
    
    function Change(e){
        settext(e.target.value)
        
        
    }
    
    function Delete(index){
  
    const copy = [...data]
    
    copy.splice(index, 1)
  
    setdata(copy)
  
    }
    
    const render = data.map((pre, index) => (
        
        <div className="render"><h3>{pre}</h3><button onClick={() => Delete(index)} className="rem">X</button></div>
    ))
    
    return(
       <div className="body">
       
       <div className="container">
       
       <h1 className="heading">To DO APP</h1>
       
       <div className="content">
       
       <input onChange={Change} type="text"/>
       
       <button onClick={Click} className="add">Add</button>
       
       
       </div>
       {render}
       
       
       </div>
       
       </div> 
        
        
        
        
    )
    
    
}





