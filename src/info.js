import React from 'react';
import './App.css';
import herbsss from './herbsintro.jpg';
function info() {
  return (
    <div>
      <h1>Home Page</h1>
      <img src={herbsss} />
      <p>
        <span className="fon">Nithin Kumar  GS </span><br/><b>6CSE8  <br/>IDno : 20181CSE0491<br/> UID: 201810100500@presidencyuniversity.in </b>     </p>
    </div>
  );
}
export default info;