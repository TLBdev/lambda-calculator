import React, {useState} from "react";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
 
import { numbers } from '../../../data' 
import NumberButton from './NumberButton'
import styled from 'styled-components'

const StyledNumbers = styled.div`
      
      display: flex;
      max-width: 100%
      
      width: 70%;
      align-items: space-around;
      justify-content: space-around;
      flex-wrap: wrap;
      .zero{
        width: 62%
        button{
          padding: 12%;
          border-radius: 40%;
          width: 90% 
        }
      }
      div{
        width: 30%
        button{
          width: 100%;
          padding: 25%;
          margin: 10%;
          background-color: blue;
          border-radius: 50%; 
          font-size: 3rem;
          border-bottom: black
        }
      }
      

`
//Import your array data to from the provided data file

export default function Numbers() {
  // STEP 2 - add the imported data to state
  const [numArr, changeNumber] = useState(numbers)
  return (
    <StyledNumbers>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
it any props needed by the child component*/
      numArr.map((number) => {
      
      return <NumberButton key = {number} button = {number}/>
      
      })}
    </StyledNumbers>
  );
};
