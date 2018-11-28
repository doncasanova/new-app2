let defaultState = {
    examplePropOne: 'example',
    examplePropTwo: 'test',
    examplePropThree: 'test1'
};
console.log ('in the reducers')
const reducers = (state = defaultState, action) => {
    newFunction();

    switch (action.type) {
        
        case "EXAMPLE":
            alert ("help")
            return {
                ...state, 
                examplePropOne: "newPropOne"
            }
        case 'EXAMPLE-TWO':
            return {
                ...state,
                examplePropTwo: action.payload
            }
            default: return state;
    }
    
}
export default reducers;

function newFunction() {
    console.log('in the switch');
}
