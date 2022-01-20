// ANCHOR UTILS
import { GET, POST, PUT } from "../util/fetch";

export interface Result {
  result: {
    _id: string;
    test: string;
    fullName: string;
    accessionNumber: string;
    dateOfCollection: string;
    dateOfRelease: string;
    output: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}}

export interface ResultInput {
  test: string;
  fullName: string;
  accessionNumber: string;
  dateOfCollection: string;
  dateOfRelease: string;
  output: string;
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
export async function fetchResult(accesionNumber: string): Promise<Result> {
  const data = await GET(`https://node-result-api.herokuapp.com/result/results/${accesionNumber}`)

  if (data.ok) {
    const response = await data.json() as Result
    return response
  }

  return null
}

// ANCHOR UPDATE RESULT
export async function updateResult(accesionNumber: string, result: ResultInput): Promise<Result> {
  const data = await PUT(`https://node-result-api.herokuapp.com/result/results/${accesionNumber}`, result, {
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
export async function createResult(result: ResultInput): Promise<Result> {
  const data = await POST("https://node-result-api.herokuapp.com/result/results/", result, {
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (data.ok) {
    const response = await data.json() as Result;
    return response
  }
}