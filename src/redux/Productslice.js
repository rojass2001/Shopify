import { createSlice} from "@reduxjs/toolkit"
const INITIAL_STATE={
    allproduct:[],
    topproducts:[],
    productdetails:[],
    filterproducts:[],
};
const productslice=createSlice({

    name:'product',
    initialState:INITIAL_STATE,
      
    reducers:{
   
   setproducts:(state,action)=>{
   state.allproduct=action.payload
   }, 
   setproductdetail:(state,action)=>{
    const b= action.payload;
    const productdetail={...b,quantity:1,subtotal:Math.floor(b.price)}
    state.productdetails= productdetail;
    console.log(state.productdetails)
   },
   increaseproductquantity:(state,action)=>{
      state.productdetails.quantity+=1;
      state.productdetails.subtotal+=Math.floor(state.productdetails.price);
   },
   decreaseproductquantity:(state,action)=>{
    if(state.productdetails.quantity>1){
    state.productdetails.quantity-=1;
    state.productdetails.subtotal-=Math.floor(state.productdetails.price);
    }
 },
   settopproducts:(state,action)=>{
    state.topproducts=action.payload.filter((item)=>(item.rating.rate>4.4))
   },
   categoryfilter:(state,action)=>{
  state.filterproducts=action.payload;
   },
   searchfilter:(state,action)=>{
      state.filterproducts=state.allproduct.filter((item)=>item.title.toLowerCase().includes(action.payload.toLowerCase()));
       }
}
})
export const {setproducts,setproductdetail,increaseproductquantity,
decreaseproductquantity,settopproducts,categoryfilter,searchfilter}=productslice.actions;
export default productslice.reducer;