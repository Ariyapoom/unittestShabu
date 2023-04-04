import { put, get } from '../index'

describe("test",()=>{
  it("should be 3",()=>{
    put(1);
    put(2);
    put(3);
    put(4);
    put(5);
    put(6);
    get()
    put(7);
    put(8);
    put(9);
    put(10);
    put(11);

    expect(get()).toBe(7);
  })
})