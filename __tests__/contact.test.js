 import Contact from "../src/Components/Contact"
 import { render,screen} from "@testing-library/react"
 import "@testing-library/jest-dom";
 
test("contact page",()=>{
    render(<Contact/>)
     let heading=screen.getByRole("heading");
    //  console.log(heading)
    expect(heading).toBeInTheDocument()
})

test("contact page",()=>{
    render(<Contact/>)
     let para=screen.getByRole("para");
    //  console.log(heading)
    expect(para).toBeInTheDocument()
})

describe("input",()=>{

    test("contact page",()=>{
        render(<Contact/>)
         let btn=screen.getByRole("button");
        //  console.log(heading)
        expect(btn).toBeInTheDocument()
    })
    
    
    test("contact page",()=>{
        render(<Contact/>)
         let ipt=screen.getAllByRole("textbox");
        //  console.log(heading)
        expect(ipt.length).not.toBe(3)
    })
})
