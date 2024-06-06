import { render,screen } from "@testing-library/react"
import {RestaurantCardOffer} from "../src/Components/RestaurantCard"
import "@testing-library/jest-dom"
import Mock_Data from "../src/mocks/item_mocks.json";

test("withoffer",()=>{
    render(<RestaurantCardOffer resData={Mock_Data}/>)
    let card=screen.getByText("item", {subHeader:"AT ₹199"})

expect(card).toBeInTheDocument()
})