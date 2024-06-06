import {Sum} from "../src/Components/sum";

test("sum of two number",()=>{
    let result=Sum(5,3);

    expect(result).toBe(8);
})

test("sum of two number",()=>{
    let result=Sum(5,2);

    expect(result).toBe(7);
})

test("sum of two number",()=>{
    let result=Sum(5,3);

    expect(result).toBe(8);
})

test("sum of two number",()=>{
    let result=Sum(5,1);

    expect(result).toBe(6);
})