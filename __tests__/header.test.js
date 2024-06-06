import { fireEvent, render,screen } from "@testing-library/react";
import Header from "../src/Components/Header";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../src/utils/appStore";

test("top",()=>{
        render(
        <BrowserRouter>
        <Provider store={appStore} >
        <Header/>
        </Provider>
        </BrowserRouter>);
        let head=screen.getByRole("image");

        expect(head).toBeInTheDocument();
})

test("top",()=>{
    render(
    <BrowserRouter>
    <Provider store={appStore} >
    <Header/>
    </Provider>

    
    </BrowserRouter>);
    let btn=screen.getByRole("button",{name:"Login"});
    fireEvent.click(btn)
    let btn_out=screen.getByRole("button",{name:"Logout"});
    expect(btn_out).toBeInTheDocument();
})