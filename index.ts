const bufferSize = 5;
let write:number = 0;
let read:number = 0;
const arr: number[] = []


export function put(number : number): void {
  if(write >= bufferSize){
    write = 0;
    arr[write] = number;
  }
  else{
    arr[write] = number;
    write++; 
  }
  if(write == read){
    read++;
    if(read >= bufferSize){
      read = 0;
    }
  }
}

export function get() {
  const result = arr[read];
  read++;
  if(read>=bufferSize){
    read = 0;
  }
  return result;
}