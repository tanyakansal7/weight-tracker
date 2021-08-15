import React from 'react';
import "./weightItem.styles.scss";
function WeightItem({currentWeight, index, removeWeight}) {
  let date = new Date(currentWeight.date);
  let day = date.getDay();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  const removeHandle = i => {
    removeWeight(i);
  }

  return (
    <div className="weight-item">
      <button className="remove-item" onClick={() => removeHandle(index)}>x</button>
      
      <div className="weight">{currentWeight.weight}Kg</div>
      <div className="date">{day + "/" + month + "/" + year}</div>
    </div>
  )
}

export default WeightItem;