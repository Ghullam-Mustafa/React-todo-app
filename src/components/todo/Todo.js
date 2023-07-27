import React from 'react'

export default function Todo() {
  return (
    <div className="main_div">
        <div className="center_div">
            <br />
            <h1>ToDo List</h1>
            <br />
            <input type="text" placeholder='Add a Items' />
            <button> + </button>

            <ol>
                <li></li>
            </ol>
        </div>
    </div>
  )
}
