import { Sub } from "../src/Components/sub";

test("sub",()=>{
    let result=Sub(3,1);
    expect(result).toBe(2);
})

test("sub",()=>{
    let result=Sub(3,-1);
    expect(result).toBe(4);
})

test("sub",()=>{
    let result=Sub(-3,1);
    expect(result).toBe(-4);
})

test("sub",()=>{
    let result=Sub(3,1);
    expect(result).toBe(2);
})