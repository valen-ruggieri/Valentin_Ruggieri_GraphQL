const typeDefs = `
type Query {
    showProducts: [Product]
}
type Mutation{
    addProduct(input:ProductInput): Product
    updateProduct(id:ID,input:ProductInput):Product
    deleteProduct(id:ID): Product


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

`
module.exports=typeDefs