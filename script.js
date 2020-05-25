// Grab the city name user searched, then get photo url through an api call
function getInfo() {
  const userCity = document.querySelector("#city").value;
  const xhr = new XMLHttpRequest(userCity);
  const url = new URL('https://api.pexels.com/v1/search');
  const params = new URLSearchParams();
  params.set('query', userCity);
  params.set('per_page', '1');
  url.search = params.toString();
  xhr.open('GET', url, true);
  xhr.setRequestHeader('Authorization', '563492ad6f9170000100000191b72a185fe644a5a08c524402334049');
  xhr.onload = function () {
      if (this.status == 200) {
        if (JSON.parse(xhr.responseText).photos[0] === undefined) {
          document.querySelector('.background').style.backgroundImage = '';
          const errorMsg = document.createElement('p');
          errorMsg.className = 'errorMsg';
          errorMsg.innerHTML = "Sorry, this city isn't available. Try another one. Meow!";
          document.querySelector('.sojooContainer').append(errorMsg);
        }
        else {
          const data = JSON.parse(xhr.responseText).photos[0].src.large2x;
          const photoUrl = 'url(' + data + ')';
          document.querySelector('.background').style.backgroundImage = photoUrl;
        }
      } else {
        const errorMsg = document.createElement('p');
        errorMsg2.className = 'errorMsg';
        errorMsg2.innerHTML = "Sorry, we're experiencing an error. Please try again.";
        document.querySelector('.sojooContainer').append(errorMsg2);
      }
  }
  xhr.onerror = function () {
    const errorMsg = document.createElement('p');
    errorMsg2.className = 'errorMsg';
    errorMsg2.innerHTML = "Sorry, we're experiencing an error. Please try again.";
    document.querySelector('.sojooContainer').append(errorMsg2);
  }
  xhr.send();
}

// On button click, call functions
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  getInfo();
});

// If the ENTER key is pressed, call functions
document.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    getInfo();
  }
});

// Reset all when user types in a new city
function reset () {
  document.querySelector('.errorMsg').innerHTML = '';
  document.querySelector('.errorMsg').removeAttribute("class");
};
document.querySelector('button').addEventListener('click', () => {
  reset();
  document.querySelector('.background').style.backgroundImage = '';
});
document.querySelector('#city').addEventListener('keydown', (e) => {
  if(e.keyCode == 13)  {
    reset();
  }
});
document.querySelector('#city').addEventListener('change', () => {
  reset();
});
document.querySelector('#city').addEventListener('click', () => {
  document.querySelector('#city').value = '';
  reset();
})

const cities = ['Tokyo', 'New York', 'Mexico City', 'Mumbai', 'Sao Paulo', 'Delhi', 'Shanghai', 'Kolkata', 'Los Angeles', 'Buenos Aires', 'Karachi', 'Cairo', 'Rio de Janeiro', 'Osaka', 'Beijing', 'Manila', 'Moscow', 'Istanbul', 'Paris', 'Seoul', 'Lagos', 'Jakarta', 'Guangzhou', 'Chicago', 'London', 'Lima', 'Tehran', 'Bogota', 'Shenzhen', 'Hong Kong', 'Tianjin', 'Chennai', 'Taipei', 'Bengaluru', 'Bangkok', 'Lahore', 'Chongqing', 'Miami', 'Hyderabad', 'Dallas', 'Santiago', 'Philadelphia', 'Belo Horizonte', 'Madrid', 'Houston', 'Ahmadabad', 'Ho Chi Minh City', 'Atlanta', 'Toronto', 'Singapore', 'Luanda', 'Baghdad', 'Barcelona', 'Haora', 'Shenyang', 'Khartoum', 'Pune', 'Boston', 'Sydney', 'Saint Petersburg', 'Chittagong', 'Riyadh', 'Hanoi', 'Guadalajara', 'Melbourne', 'Alexandria', 'Chengdu', 'Rangoon', 'Phoenix', 'Porto Alegre', 'Surat', 'Hechi', 'Abidjan', 'Brasilia', 'Ankara', 'Monterrey', 'Yokohama', 'Nanjing', 'Montreal', 'Guiyang', 'Recife', 'Seattle', 'Harbin', 'San Francisco', 'Fortaleza', 'Zhangzhou', 'Detroit', 'Salvador', 'Busan', 'Berlin', 'Algiers', 'Rome', 'Pyongyang', 'Medellin', 'Kabul', 'Athens', 'Nagoya', 'Cape Town', 'San Diego', 'Changchun', 'Casablanca', 'Dalian', 'Cawnpore', 'Kano', 'Addis Ababa', 'Curitiba', 'Zibo', 'Nairobi', 'Hangzhou', 'Benoni', 'Caracas', 'Milan', 'Stuttgart', 'Kunming', 'Dar es Salaam', 'Minneapolis', 'Jaipur', 'Taiyuan', 'Frankfurt', 'Surabaya', 'Lisbon', 'Tampa', 'Jinan', 'Fukuoka', 'Campinas', 'Denver', 'Kaohsiung', 'Katowice', 'Aleppo', 'Durban', 'Kyiv', 'Lucknow', 'Giza', 'Zhengzhou', 'Taichung', 'Brooklyn', 'Ibadan', 'Faisalabad', 'Fuzhou', 'Changsha', 'Dakar', 'Izmir', 'Xiangtan', 'Lanzhou', 'Incheon', 'Sapporo', 'Xiamen', 'Guayaquil', 'George Town', 'Mashhad', 'Damascus', 'Daegu', 'Nagpur', 'Lianshan', 'Shijiazhuang', 'Tunis', 'Vienna', 'Jilin', 'Omdurman', 'Bandung', 'Bekasi', 'Mannheim', 'Nanchang', 'Wenzhou', 'Vancouver', 'Birmingham', 'Cali', 'Naples', 'Sendai', 'Manchester', 'Puebla', 'Tripoli', 'Tashkent', 'Havana', 'Gaoping', 'Baltimore', 'Nanning', 'Belem'];
function autocomplete(inp, arr) {
  let currentFocus;
  inp.addEventListener('input', function(e) {
      var a, b, i, val = this.value;
  closeAllLists();
      if (!val) {return false;}  
      currentFocus = -1;
      a = document.createElement('DIV');
      a.setAttribute('id', this.id + 'autocompleteList');
      a.setAttribute('class', 'autocompleteItems');
      this.parentNode.appendChild(a);
      for (i = 0; i < arr.length; i++) {
          // check if the item starts with the same letters as the text field value
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          // create a DIV element for each matching element
          b = document.createElement('DIV');
          // make the matching letters bold
          b.innerHTML = '<span>' + arr[i].substr(0, val.length) + '</span>';
          b.innerHTML += arr[i].substr(val.length);
          // insert a input field that will hold the current array item's value
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.querySelectorAll('input')[0].value;
              closeAllLists();
          });
          a.appendChild(b);
          }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener('keydown', function(e) {
      var x = document.getElementById(this.id + "autocompleteList");
      if (x) x = x.querySelectorAll("div");
      if (e.keyCode == 40) {
        // If the arrow DOWN key is pressed, increase the currentFocus variable
        currentFocus++;
        addActive(x);
      } else if (e.keyCode == 38) {
        // If the arrow UP key is pressed, decrease the currentFocus variable
        currentFocus--;
        addActive(x);
      } else if (e.keyCode == 13) {
        // If the ENTER key is pressed, prevent the form from being submitted
        e.preventDefault();
        if (currentFocus > -1) {
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("autocompleteActive");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocompleteActive");
    }
  }
  function closeAllLists(elmnt) {
    var x = document.querySelectorAll(".autocompleteItems");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
} 
autocomplete(document.querySelector("#city"), cities);