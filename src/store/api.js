/// create action creators here with react toolkit or manually

const API_CALL_BEGAN = "api/callBegan";

export const apiCallBegan = payloadObj => ({
    type: API_CALL_BEGAN,
    payload: payloadObj
})