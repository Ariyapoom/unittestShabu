import axios from "axios";
export async function shabuCalculatePro4(productCode: string, customerAmount: number) {
  const result = await axios.post("/get-product-price", {
    productCode: productCode,
    customerAmount: customerAmount
  });
  let calculatedPrice = Math.floor(result.data.net * (1 + ((result.data.servicecharge / 100))))
  if(customerAmount % 4 == 0){
    let discount = (customerAmount/4) * result.data.price * (1 + ((result.data.servicecharge / 100)));
    return calculatedPrice - discount;
  }
  else{
    return calculatedPrice;
  }

}