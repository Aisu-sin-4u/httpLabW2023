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
        // if(data.ok){
        //   resolve(JSON.stringify(data));
        // }
        // reject(`Post Error: ${response.status}:${response.statusText}`);
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
            headers: {"content-type": "application/json"},
            body: JSON.stringify(data)
          }
          const response = await fetch(url, currentMethod);
          const output = await response.json();
          if(response.ok){
            resolve(JSON.stringify(output));
            // if(output.ok){
            //   resolve(JSON.stringify(output));
            // }
            // reject(`Post Error: ${response.status}:${response.statusText}`);
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
          headers: {"content-type": "application/json"},
          body: JSON.stringify(data)
        }
        const response = await fetch(url, currentMethod);
        const output = await response.json();
        if(response.ok){
                resolve(JSON.stringify(output));
                // if(output.ok){
                //   resolve(JSON.stringify(output));
                // }
                // reject(`Put Error: ${response.status}:${response.statusText}`);
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
          headers: {"content-type": "application/json"}
        }
        const response = await fetch(url, currentMethod);
        const output = await response.json();
        if(response.ok){
          resolve(JSON.stringify(output));
        // if(output.ok){
        //   resolve(JSON.stringify(output));
        // }
        // reject(`Delete Error: ${response.status}:${response.statusText}`);
      }else{
        reject(`Delete Error: ${response.status}:${response.statusText}`);
      }
    })
  }
      //Patch Method
  patch(url, data) {
  return new Promise(async (resolve, reject) =>{
    let currentMethod = {
      method: "PATCH",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(data)
    }
    const response = await fetch(url, currentMethod);
    const output = await response.json();
    if(response.ok){
      resolve(JSON.stringify(output));
      // if(output.ok){
      //   resolve(JSON.stringify(output));
      // }
      // reject(`Patch Error: ${response.status}:${response.statusText}`);
    }else{
      reject(`Patch Error: ${response.status}:${response.statusText}`);
    }
  })
  }
}
    