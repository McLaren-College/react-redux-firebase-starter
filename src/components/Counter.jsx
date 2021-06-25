import {useDispatch, useSelector} from "react-redux";
import {decrementAsync, incrementAsync} from "../actions/counterActions";

export default function Counter() {
    let {value, isUpdating} = useSelector(state => state);
    let dispatch = useDispatch();

    return (
        <div className="counter-container">
            <button disabled={isUpdating} className="primary" onClick={(e) => dispatch(decrementAsync())}>Decrement
                (-)
            </button>
            <p className="value">{value}</p>
            <button disabled={isUpdating} className="primary" onClick={(e) => dispatch(incrementAsync())}>Increment
                (+)
            </button>
        </div>
    )

}