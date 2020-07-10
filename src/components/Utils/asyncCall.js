export default async function asynCall() {
    const response=await fetch('http://localhost:3002/contacts');
    const json=await response.json();
    return json();
  }