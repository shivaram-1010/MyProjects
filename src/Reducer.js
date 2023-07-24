export const initialState={
    Cart:[],
    user:null,
};


export const CartTotal=(Cart)=>
{
    return Cart?.reduce((amount,item)=>item.price+amount ,0);
}

const reducer=(state,action)=>{
    console.log(action)
        switch (action.type) {
            case 'Add_to_cart':
                return{
                    ...state,
                    Cart:[...state.Cart,action.item],
                };

            case 'Remove_from_cart':
                
                    const index=state.Cart.findIndex(
                        (CartItem)=>CartItem.id===action.id
                    );
                    let newCart=[...state.Cart]

                    if(index>=0)
                    {
                        newCart.splice(index,1);
                    }
                    else
                    {
                        console.warn("cant remove")
                    }

                return{
                    ...state,
                    Cart:newCart
                }
            case "SET_USER":
                return{
                    ...state,
                    user:action.user
                }
            case 'Empty_Cart':
                return{
                    ...state,
                    Cart:[]
                }

            
                default:
                    return state
        }
}


export default reducer;