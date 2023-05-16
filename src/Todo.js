import React, { useRef, useState } from "react";

export default function Todo() {
  const todoInput = useRef();
  const [list, setList] = useState([]);
  const [updateIndex, setUpdateIndex] = useState(-1);
  // const [updateTodo, setUpdateTodo] = useState("");
  const updateInput = useRef();

  const addTodo = () => {
    const newTodo = todoInput.current.value;
    // alert(newTodo);
    if (newTodo !== "") {
      alert(newTodo);
      const updateList = [...list, newTodo];
      setList(updateList);
      alert(list);
      todoInput.current.value = "";
    }
  };

  const updatemode = (i) => {
    setUpdateIndex(i);
  };

  const completedupdate = (i) => {
    const updatedList = [...list];
    console.log(updatedList);
    updatedList[i] = updateInput.current.value;
    alert(updateInput.current.value);
    setList(updatedList);
    setUpdateIndex(-1);
    updateInput.current.value = "";
  };
  const deleteTodo = (i) => {
    // alert(i);
    const deleteList = list.filter((todo) => todo.id !== i);
    setList(deleteList);
    console.log(list);
    console.log(i);
    // alert(list);
    // setList((list) => list.filter((todo) => todo.id !== i));
  };
  const todoList = () => {
    return list.map((todo, i) => (
      <li key={i}>
        {updateIndex === i ? (
          <div>
            <input
              type="text"
              placeholder={todo}
              ref={updateInput}
              // value={updateTodo}
              // onChange={(e) => setUpdateTodo(e.target.value)}
            ></input>
            <button onClick={() => completedupdate(i)}>제출하기</button>
          </div>
        ) : (
          <div>
            {todo}
            <button onClick={() => updatemode(i)}>수정하기</button>
            <button onClick={() => deleteTodo(i)}>삭제하기</button>
          </div>
        )}
      </li>
    ));
  };

  return (
    <>
      <input type="text" data-testid="new-todo-input" ref={todoInput} />
      <button data-testid="new-todo-add-button" onClick={addTodo}>
        추가
      </button>
      {todoList()}
      {/* <li>
        <label>
          <input type="checkbox">
            <span>TODO 1</span>
          </input>
        </label>
      </li> */}
    </>
  );
}
