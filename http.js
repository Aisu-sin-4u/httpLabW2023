export class HTTPClient {
    
  //GET method
  get(url) {
    return new Promise(async (resolve, reject) =>{
      let currentMethod = {
        method: "GET"
      }
      const response = await fetch(url, currentMethod);
      const data = await response.json();
      if(response.ok){
        resolve(JSON.stringify(data));
      }else{
        reject(`Get Error: ${response.status}:${response.statusText}`);
      }
    })
  }
  
  //POST method    
  post(url, data) {
        return new Promise(async (resolve, reject) =>{
          let currentMethod = {
            method: "POST",
            body: JSON.stringify(data)
          }
          const response = await fetch(url, currentMethod);
          const output = await response.json();
          if(response.ok){
            resolve(JSON.stringify(output));
          }else{
            reject(`Post Error: ${response.status}:${response.statusText}`);
          }
        })
  }
      
  //PUT Method    
  put(url, data) {
            return new Promise(async (resolve, reject) =>{
              let currentMethod = {
                method: "PUT",
                body: JSON.stringify(data)
              }
              const response = await fetch(url, currentMethod);
              const output = await response.json();
              if(response.ok){
                resolve(JSON.stringify(output));
              }else{
                reject(`Put Error: ${response.status}:${response.statusText}`);
              }
            })
  }
      
  //DELETE Method    
  delete(url) {
          return new Promise(async (resolve, reject) =>{
            let currentMethod = {
              method: "DELETE",
            }
            const response = await fetch(url, currentMethod);
            const output = await response.json();
            if(response.ok){
              resolve(JSON.stringify(output));
            }else{
              reject(`delete Error: ${response.status}:${response.statusText}`);
            }
          })
      }
}

patch(url, data) {
  return new Promise(async (resolve, reject) =>{
    let currentMethod = {
      method: "PATCH",
      body: JSON.stringify(data)
    }
    const response = await fetch(url, currentMethod);
    const output = await response.json();
    if(response.ok){
      resolve(JSON.stringify(output));
    }else{
      reject(`Patch Error: ${response.status}:${response.statusText}`);
    }
  })
}
    