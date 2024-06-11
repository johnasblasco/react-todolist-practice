import { useState } from "react";
import {RiCheckboxBlankFill} from 'react-icons/ri';
import {RiCheckboxFill} from 'react-icons/ri';
import {RiDeleteBin6Fill} from 'react-icons/ri';
import {TbPencilPlus} from 'react-icons/tb';
import {v4 as uuid} from 'uuid';


const todoListDefault = [
      {
            id: uuid(),
            text: "Testing 1",
            complete: false
      },
      {
            id: uuid(),
            text: "Testing 2",
            complete: false

      }
]
console.log(todoListDefault)

function App() {
      const [popup, setPopup] = useState(false);
      const [todoList, setTodoList] = useState(todoListDefault);
      const [newTaskText, setNewTaskText] = useState("change me");

      function handlePopup (){
            setPopup(!popup)
            
      }

      const addTask = () =>{
            if(newTaskText !== ""){
                  setTodoList(
                        current =>{
                              return [
                                    ...current,{
                                          id: uuid(),
                                          complete: false,
                                          text: newTaskText

                                    }
                              ]
                        }

                  )
            }
            setNewTaskText("");
            setPopup(!popup)

      }



  return (

      <> 
      {/* popup */}
      {popup && 
            <div className="pop-up-container">
                  <div className="pop-up">
                        <p className="pop-up-title">
                              lets add your task!
                        </p>
                        <input
                              className="pop-up-input"
                              type="text"
                              value={newTaskText}
                              onChange={(e) => {
                                    setNewTaskText(e.target.value)
                              }}
                        
                        />
                        <div className="pop-up-button-container">
                              <button className="pop-up-button back" onClick={handlePopup}>
                                    Go back
                              </button>
                              <button className="pop-up-button add" onClick={addTask}>
                                    Add Task
                              </button>
                        </div>
                  </div>
            </div>
      }
      {/* header */}
            <div className="header-container">
                  <div className="header">
                        <p className="header-title"> My Tasks </p>
                 

                        <div className="header-add-task">
                              <p className="header-add-task-text">
                                    <TbPencilPlus onClick={handlePopup} />
                              </p>
                        </div>


                  </div>
            </div>

            {/* LETS START */}
            

            <div className="to-do-list">

                  {/* ITERATE USING MAP */}

                  {
                        todoList.map((listItem) => {
                              return(
                                    <div className="to-do-container" key={listItem.id}>
                                          <p className="to-do-checkbox">
                                                <RiCheckboxBlankFill />
                                          </p>
                  
                                          
                                          <p className="to-do-text">
                                                {listItem.text}
                                          </p>
                  
                  
                                          <p className="to-do-delete">
                                                <RiDeleteBin6Fill/>
                                          </p>
                                    </div>
                              )
                        })
                              

                  }                  


            </div>

      </>

      
  );
}

export default App;
