import axios from "axios"
import MockAdapter from "axios-mock-adapter"

describe("test",()=>{
  let mock = new MockAdapter(axios)
  it("should be 3",async ()=>{
    mock.onGet('/user').reply(200,{
      userName: 'af'
    })
    const result = await axios.get('/user');
    console.log(result);
    
  })
})