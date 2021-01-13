async function sendData(data)  {
  const url = 'http://localhost:808/api/parse';
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  const raw = JSON.stringify(data);
  
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch(url, requestOptions)
    .then(response => console.log(response))
    .catch(error => console.log('error', error));
}

export {sendData};