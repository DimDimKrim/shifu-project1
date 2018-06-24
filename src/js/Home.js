import React from 'react';
import { Link } from 'react-router-dom'

export default function (props) {
  return (
    <div>
      <strong></strong>
      {props.name}
      <Link to="/admin">admin</Link>
    </div>
  );
}



// function sum(a, b) {
//   return a + b;
// }

// function four() {
//   return 1 + 3;
// }

// console.log(four());

// 2 == "2"  true
// 2 === "2" false

// function isLeap(year) {
//   if (year % 4 === 0) {
//     return true;
//   }
//   else {
//     return false;
//   }
// }

// console.log(isLeap(2016));