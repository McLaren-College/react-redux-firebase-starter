export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const BEGIN_UPDATE = 'BEGIN_UPDATE';


export const increment = () => {
    return {
        type: INCREMENT_COUNTER
    }
};

export const decrement = () => {
    return {
        type: DECREMENT_COUNTER
    }
};

const updateBegin = () => {
    return {
        type: BEGIN_UPDATE
    }
};

// To simulate network delay
let sleep = (time) => new Promise((resolve, reject) => setTimeout(() => resolve(), time));

export const incrementAsync = () => {
    return async (dispatch) => {
        dispatch(updateBegin());
        await sleep(2000);
        dispatch(increment());
    }
};

export const decrementAsync = () => {
    return async (dispatch) => {
        dispatch(updateBegin());
        await sleep(2000);
        dispatch(decrement());
    }
};


