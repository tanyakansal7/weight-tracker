import ListActionTypes from "./list.types"
export const addWeightToList=weight=>(
{
    type:ListActionTypes.ADD_WEIGHT,
    payload:weight
}
)