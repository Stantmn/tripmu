import { initialState } from "../state/initialState";

const mainFormReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case "CHANGE_DEPARTURE":
            return { ...state, departure: action.departure };
        case "CHANGE_START_DATE":
            console.log(action.startDate);
            console.log(state.endDate);
            if ((action.startDate.getTime() > state.startDate.getTime()) && (action.startDate.getTime() > state.startDate.getTime())) {
                action.endDate = action.startDate;
            } else {
                action.endDate = state.endDate;
            }
            return { ...state, startDate: action.startDate, endDate: action.endDate };
        case "CHANGE_END_DATE":
            return { ...state, endDate: action.endDate };
        default:
            return state;
    }
};

export default mainFormReducer;
