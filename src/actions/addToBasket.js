const addToBasket = (id, title, image, price, rating)=>{
   return {
       type : "ADD_TO_BASKET",
       item :{
           id:id,
           title:title,
           image:image,
           price:price,
           rating:rating
       }
   }
}
export default addToBasket;