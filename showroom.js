const cars =[
  {
   company:"audi",
    name:"Audi Q8 Prestige 2020",
    stockNumber:"D406488A",
    mileage:"59,607",
    price:"$10,000"
  },
  {
    company:"mercedes",
    name:"Mercedes-Benz GLE AMG 43 4matic Coupe 2019",
      stockNumber:"DRA9969C",
      mileage:"57,854",
      price:"$5,000"
  },
  {
    company:"lexus",
    name:"Lexus IS 350 F Sport 2021",
      stockNumber:"R54587A",
      mileage:"73,975",
      price:"$9,500"
  }
]

function createTable (company){
  console.log(company)
  let tableBody="";
  for(let i =0; i < cars.length; i++){
   if(company===cars[i].company) {
     tableBody = tableBody + `<tr>
     <td>${cars[i].name}</td>
     <td>${cars[i].stockNumber}</td>
     <td>${cars[i].mileage}</td>
     <td>${cars[i].price}</td>
     </tr>`;
    
     
   }

 }
  const myTableBody =document.getElementById("table-body");
  myTableBody.innerHTML = tableBody;

  const myTable = document.getElementById("table1");
  myTable.style.display = "table";
}

const buttonOne = document.getElementById("bton1")
buttonOne.addEventListener("click",()=> {
  alert("Great choice! You are one step closer to your dream car!")
} );

const buttonTwo = document.getElementById("bton2")
buttonOne.addEventListener("click",()=> {
  // alert("Great choice! You are one step closer to your dream car! ")
} );

const buttonThree = document.getElementById("bton3")
buttonOne.addEventListener("click",()=> {
} );  

function filtercompany() {
  document.getElementById("myDropdown");
  let companydivs = document.querySelectorAll(".dropdown-content")
  for(let i = 0; i < companydivs.length; i++)
    if (companydivs[i].style.display === "block"){
      companydivs[i].style.display = "none";
    } else{
      companydivs[i].style.display = "block";
    }
 //this function should change the display property of the div around companys
  //If display is currently "none",then change display to block 
  //If display is currenlty "blocked", then change to none
}
