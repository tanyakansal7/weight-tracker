import WeightForm from "../../components/WeightForm/WeightForm.component";
import WeightList from "../../components/weight-list/weight-list.component";
import "./weight-tracking-page.styles.scss";
const WeightTrackingPage=()=>(
    <div className="weight-tracking">
        <WeightForm/>
        <WeightList/>
    </div>
);
export default WeightTrackingPage;