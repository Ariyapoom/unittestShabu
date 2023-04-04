import Mockadapter from "axios-mock-adapter"
import axios from "axios"
import { shabuCalculatePro4 } from "../shabucalculate"

describe("", ()=>{
  const mock = new Mockadapter(axios);
  test.each([
    {
      count: 1,
      expectedResult: 374
    },
    {
      count: 2,
      expectedResult: 748
    },
    {
      count: 3,
      expectedResult: 1122
    },
    {
      count: 4,
      expectedResult: 1122
    },
    {
      count: 5,
      expectedResult: 1870 
    },
    {
      count: 6,
      expectedResult: 2244 
    },
    {
      count: 7,
      expectedResult: 2618
    },
    {
      count: 8,
      expectedResult: 2244
    },
  ])("employee count $count should be $expectedResult",async ({count,expectedResult})=>{
    mock.onPost("/get-product-price",{
      productCode: "Shabu340",
      customerAmount: count,
    }).reply(
      200,
      {
        productcode:"Shabu340",
        amountCustomer: count,
        servicecharge: 10,
        price: 340,
        net: count * 340,
      }
    );
    expect(await shabuCalculatePro4("Shabu340", count)).toBe(expectedResult);
  })
})