import { render,screen } from "@testing-library/react"
import RestaurantCard from "../src/Components/RestaurantCard"
import "@testing-library/jest-dom"
import Mock_Data from "../src/mocks/rescard_mocks.json";
test("rescard",()=>{
    render(<RestaurantCard resData={Mock_Data}/>)
    let card=screen.getByText("Faasos - Wraps, Rolls & Shawarma")

expect(card).toBeInTheDocument()
})