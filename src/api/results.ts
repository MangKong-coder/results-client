// ANCHOR UTILS
import { GET, POST } from "../util/fetch";

export interface Result {
  result: {
    _id: string;
    test: string;
    fullName: string;
    accessionNumber: string;
    dateOfCollection: number;
    dateOfRelease: number;
    output: string;
    __v: number
  }
  
}

// ANCHOR GET ALL RESULTS
export async function fetchResults(): Promise<Result[]> {
  const data = await fetch('https://node-result-api.herokuapp.com/result/results')
  
  if (data.ok) {
    const response = await data.json() as Result[]
    return response
  }
  return null
}

// ANCHOR GET SINGLE RESULT
export async function fetchResult(id: string): Promise<Result> {
  const data = await GET(`https://node-result-api.herokuapp.com/result/results/${id}`)

  if (data.ok) {
    const response = await data.json()
    return response
  }

  return null
}

// ANCHOR UPDATE RESULT
export async function updateResult(id: string): Promise<Result> {
  const data = await fetch(`https://node-result-api.herokuapp.com/result/results/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (data.ok) {
    const response = await data.json() as Result;
    return response
  }
  return null;
}


// ANCHOR CREATE RESULT
export async function createResult(result: Result): Promise<Result> {
  const data = await POST("https://node-result-api.herokuapp.com/result/results/", {
    method: 'POST',
    body: JSON.stringify(result),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (data.ok) {
    const response = await data.json() as Result;
    return response
  }
}