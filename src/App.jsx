import AlertBox from "./AlertBox"
import ContentSection from "./ContentSection"
import Features from "./Features"
import FilterableList from "./FilterableList"
import Greeting from "./Greeting"
import Product from "./Product"
import ProductCard from "./ProductCard"
import ProgressBar from "./ProgressBar"
import Recipe from "./Recipe"
import User from "./User"

function App() {

  const userData = {
    name : "Alice",
    email : "alice@example.com",
    imageUrl : "https://placehold.co/100x100/A020F0/ffffff?text=ALICE"
  }
  const productData = {
    id : 1,
    name : "Laptop",
    price : 2500,
    inStock : false
  }

  const appFeatures = [
    "Real-time updates",
    "User Authentication",
    "Data export",
    "Customizable themes"
  ]
  const usersData = [
    { id: 1, name: "Charlie", isOnline: true },
    { id: 2, name: "Diana", isOnline: false },
    { id: 3, name: "Eve", isOnline: true }
  ]

  const pizzaRecipe = {
    name: "Homemade Pizza",
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Mozzarella cheese",
      "Pepperoni",
      "Oregano"
    ],
    instructions: "Roll out dough. Spread sauce. Add cheese and toppings. Bake at 450°F for 12-15 minutes."
  }
  const inventoryItems = [
    { id: 1, name: "Laptop", category: "Electronics" },
    { id: 2, name: "Desk Chair", category: "Furniture" },
    { id: 3, name: "Monitor", category: "Electronics" },
    { id: 4, name: "Bookshelf", category: "Furniture" }
  ]

  return (
    <>
      <Greeting name ="Alice"/>
      <ProductCard name ={userData.name} email = {userData.email} imageUrl={userData.imageUrl}/>
      <Product productName={productData.name} price={productData.price} inStock={productData.inStock}/>
      <Features list = {appFeatures}/>
      <ProgressBar percentage={75}/>
      <ProgressBar percentage={20}/>
      <ProgressBar percentage={110}/>
      <AlertBox message="Operation Successful !" type ="success"/>
      <AlertBox message="Something went wrong." type ="error"/>
      <User list = {usersData}/>
      <Recipe name = {pizzaRecipe.name} ingredients={pizzaRecipe.ingredients} instruction={pizzaRecipe.instructions}/>
      <ContentSection title="About Us">
        <p>We are a company dedicated to...</p>
        <img src="https://placehold.co/150x100" alt="About Us" />
      </ContentSection>

    <ContentSection title="Contact Info">
      <ul>
        <li>Email: info@example.com</li>
        <li>Phone: 123-456-7890</li>
      </ul>
    </ContentSection>
    <FilterableList items = {inventoryItems} />
    <FilterableList items = {inventoryItems} filterCategory = "Electronics" />
    </>
  )
}

export default App
