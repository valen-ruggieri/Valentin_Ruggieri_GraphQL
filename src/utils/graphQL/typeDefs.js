const typeDefs = `
type Query {
    showProducts: [Product]
    showCartByUserId(id:ID): Cart
}
type Mutation{
    addProduct(input:ProductInput): Product
    updateProduct(id:ID,input:ProductInput):Product
    deleteProduct(id:ID): Product
    addProductInCart(idUser:ID,idProduct:ID): Cart
    deleteProductInCart(idUser:ID,idProduct:ID): Cart
    deleteCart(idUser:ID):Cart
    buyCart(idUser:ID): String

}
type Product{
    _id:ID
    titulo:String 
    descripcion:String 
    timestamp: String 
    precio: Int
    img: String
    codigo: String

}

input ProductInput {
    titulo:String 
    descripcion:String 
    timestamp: String 
    precio: Int
    img: String
    codigo: String
}
type Cart{
    timestamp: String
    precioTotal: Int
    products: [ProductCart]
}
type ProductCart{
    _id:ID
    titulo:String 
    descripcion:String 
    timestamp: String 
    precio: Int
    img: String
    codigo: String
    cant:Int
}
`
module.exports=typeDefs