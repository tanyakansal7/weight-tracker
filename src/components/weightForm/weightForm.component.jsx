import React, {useRef} from 'react';
import "./weightForm.styles.scss";
function WeightForm({ weight, setWeight }) {
 
  const date = useRef(null);
  const Weight = useRef(null);

  const AddWeight = e => {
    e.preventDefault();

    let d = date.current.value.split("-");
    let newD = new Date(d[0], d[1] - 1, d[2]);
    
    setWeight([...weight, {
    
      "Weight": Weight.current.value,
      "date": newD.getTime()
    }]);


    Weight.current.value = null;
    date.current.value = null;
  }

  return (
    <form className="weight-form" onSubmit={AddWeight}>
      <div className="form-inner">
        
        <input type="number" name="Weight" id="Weight" placeholder="Weight..." ref={Weight}/>
        <input type="date" name="date" id="date" placeholder="Weight date..." ref={date} />
        <input type="submit" value="Add Weight" />
      </div>
    </form>
  )
}

export default WeightForm;