const branchesReducer = (state = [], action) => {

    switch (action.type) {
        case 'FETCH_ALL_BRANCHES':
            return action.payload;
        case 'CREATE':
            return state
        
        default:
            return state
    }

}

export default branchesReducer