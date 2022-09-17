const typeDefs = `
type Query {
    showProducts: [Product]
    showCartByUserId(id:ID): Cart
    showAccount(idUser:ID):User
    logOut:String
}
type Mutation{
    addProduct(input:ProductInput): Product
    updateProduct(id:ID,input:ProductInput):Product
    deleteProduct(id:ID): Product
    addProductInCart(idUser:ID,idProduct:ID): Cart
    deleteProductInCart(idUser:ID,idProduct:ID): Cart
    deleteCart(idUser:ID):Cart
    buyCart(idUser:ID): String
    signIn(input:UserSignIn):User
    deleteUser(idUser:ID):User
    logIn(input:UserLogIn):User

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
type User{
    user: String
    email: String
    password: String
    userType: String
    address: String
    age: String
    phone: String
    image: String
    cartId:ID
}
input UserSignIn{
    email:String!
    password:String!
}
input UserLogIn{
    user: String
    email: String
    password: String
    userType: String
    address: String
    age: String
    phone: String
    image: String
}
`
module.exports=typeDefs