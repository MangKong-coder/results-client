// ANCHOR UTILS
import { GET, POST, PUT } from "../util/fetch";

export interface Result {
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
}

export interface Results {
  result: Result[]
}

export interface ResultInput {
  test: string;
  fullName: string;
  accessionNumber: string;
  dateOfCollection: string;
  dateOfRelease: string;
  output: string;
}

// SECTION GET ALL RESULTS
export async function fetchResults(): Promise<Results> {
  const data = await fetch('https://node-result-api.herokuapp.com/result/results')
  
  if (data.ok) {
    const response = await data.json() as Results
    return response
  }
  return null
}

// SECTION GET SINGLE RESULT
export async function fetchResult(accesionNumber: string): Promise<Result> {
  const data = await GET(`https://node-result-api.herokuapp.com/result/results/${accesionNumber}`)

  if (data.ok) {
    const response = await data.json() as Result
    return response
  }

  return null
}

// SECTION UPDATE RESULT
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


// SECTION CREATE RESULT
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

// SECTION DELETE RESULT
export async function deleteResult(id: string): Promise<string> {
  const data = await fetch(`https://node-result-api.herokuapp.com/result/results/${id}`, {
    method: 'DELETE'
  })

  if (data.ok) {
    const response = await data.json() as string;
    return response
  }
}