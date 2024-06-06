import { fireEvent, render ,screen } from "@testing-library/react";
import Body from "../src/Components/Body";
import {act} from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import Mock_Data from "../src/mocks/body_mocks.json";
import "@testing-library/jest-dom";

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(Mock_Data)
        }
    })
})

test("test the serach action",async()=>{
    await act(async()=>{
        render(<BrowserRouter><Body/></BrowserRouter>)
        // let filterbtn=screen.getByTestId("topres")
        let filterbtn=screen.getByRole("button",{name:"Top Rated Restaurant"})
        // fireEvent.click(filterbtn);
        // let filterCard=screen.getAllByTestId("resCard")
        expect(filterbtn).toBeInTheDocument()
    })
})