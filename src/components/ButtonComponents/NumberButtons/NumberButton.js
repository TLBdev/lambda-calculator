import React from "react";
import styled from 'styled-components'


export default function NumberButton(props) {
  if (props.button === '0'){
    return (
    <div className = 'zero'>
      <button >
        {props.button}
      </button>

      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </div>)
  }
  
  return (
    <div>
      <button>
        {props.button}
      </button>

      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </div>
  )
};
