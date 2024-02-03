const initialState = {
    likeCount: 0
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                likeCount: state.likeCount + 1
            };
        case "DECREMENT":
            return {
                likeCount: state.likeCount - 1
            }
        default:
            return state;
    }
}

export default Reducer