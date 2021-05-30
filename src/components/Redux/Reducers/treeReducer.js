import allTrees from '../../fakeData/fakeData.json'

const initialState = {

    cartList : [],
    treesList : allTrees,

}
const treeReducer = (state = initialState, action) => {
    
    switch (action.type) {
       case 'Add_To_Cart':
        
            return state
     
    
       case 'Remove_From_Cart':
            
            return state
        
       default:
        return state;
    }
    
}

export default treeReducer;