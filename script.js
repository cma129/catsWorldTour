function getInfo() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.pexels.com/v1/search?query=nature&per_page=1', true);
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.setRequestHeader('X-API-Key', '563492ad6f9170000100000191b72a185fe644a5a08c524402334049');
    xhr.onload = function () {
        if (this.status == 200) {
            console.log('Worked');
        } else {
            console.log(this.status);
        }
    }
    xhr.onerror = function () {
        console.log('Request Error');
    }
    xhr.send();
}

getInfo();

// const uri = 'https://api.pexels.com/v1/search?query=people';

// let h = new Headers();
// h.append('Accept', 'application/json');
// let req = new Request (uri, {
//     method: 'GET',
//     headers: h,
//     setRequestHeader()Authorization: 563492ad6f9170000100000191b72a185fe644a5a08c524402334049
// });


// fetch(req)
//     .then( (response) => {
//         if(response.ok){
//             return response.json();
//         }else{
//             throw new Error('error');
//         }
//     })
//     .then( (jsonData) => {
//         console.log(jsonData);

//     })
//     .catch( (err) => {
//         console.log('ERROR:', err.message);
//     });  
