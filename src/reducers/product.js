export default function getProducts(state=[], action){
    console.log("reducer getProducts",action.response);
    switch(action.type){
        case 'LOAD_SUCCESS':
            return action.response.data
        default:
            return state;
    }
}