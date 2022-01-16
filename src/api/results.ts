import { GET } from "../util/fetch";

export interface Result {
  result: {
    _id: string;
    test: string;
    fullName: string;
    accessionNumber: string;
    dateOfCollection: string;
    dateOfRelease: string;
    output: string;
    __v: number
  }
  
}

export async function fetchResults(): Promise<Result[]> {
  const data = await fetch('https://node-result-api.herokuapp.com/result/results')
  
  if (data.ok) {
    const response = await data.json() as Result[]
    return response
  }
  return null
}

export async function fetchResult(id: string): Promise<Result> {
  const data = await GET(`https://node-result-api.herokuapp.com/result/results/${id}`)

  if (data.ok) {
    const response = await data.json()
    return response
  }

  return null
}


// export async function updateResult(id: string): Promise<Result> {
//   const data = await fetch(`https://node-result-api.herokuapp.com/result/results/${id}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })

//   if (data.ok) {
//     const response = await data.json() as Result;
//     return response
//   }
//   return null;
// }