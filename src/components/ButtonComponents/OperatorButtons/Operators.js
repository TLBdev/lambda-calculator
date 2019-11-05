import React from "react";

//import any components needed
import OperatorButton from './OperatorButton'
//Import your array data to from the provided data file
import { operators } from '../../../data'
const Operators = () => {
  // STEP 2 - add the imported data to state
  const [opArr] = React.useState(operators)
  return (
    <div>
      {opArr.map((operator) => <OperatorButton key = {operator} button = {operator}/>)}
    </div>
  );
};
export default Operators