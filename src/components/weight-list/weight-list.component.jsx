import React from 'react'
import WeightItem from './weightItem';
import "./weight-list.styles.scss";
function WeightList({weight,setWeight}) {
    const removeWeight=i=>{
        let temp=weight.filter((v,index)=>index!==i);
        setWeight(temp);
    }
    const sortByDate=(a,b)=>{
        return a.date=b.date;
    }
    return (
        <div className="weight-list">
            {
                weight.sort(sortByDate).map((value,index)=>(
                    <WeightItem key={index} weight={value} index={index} removeWeight={removeWeight}/>
                ))
            }
        </div>
    )
}

export default WeightList;
