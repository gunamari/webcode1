let div=document.createElement("div");

div.setAttribute("class","main1");

let formgroup=document.createElement("div");
formgroup.setAttribute("class","formgroup")

let input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("class","form-control");
input.setAttribute("id","main");
input.setAttribute("placeholder","Nationalize API");
input.style.width="520px";

let button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("bbtn-btn-primary");
button.innerHTML="Search";
button.style.marginLeft="200px";
button.style.marginTop="20px";
button.style.borderRadius="4px";
button.style.background="blue";
button.addEventListener("click",foo)

let name1=document.createElement("div")
name1.setAttribute("id","name");

let country1=document.createElement("div")
country1.setAttribute("id","country1");

let country2=document.createElement("div")
country2.setAttribute("id","country2");

let probability1=document.createElement("div");
probability1.setAttribute("id","probability1")

let probability2=document.createElement("div");
probability2.setAttribute("id","probability2")

formgroup.append(input,button,name1,probability1, probability2,country1,country2);

div.append(formgroup);
document.body.append(div);

async function foo(){
    try {
        let name=document.getElementById("main").value;
        console.log(name);
        let res=await fetch(`https://api.nationalize.io?name=${name}
        `)
        let res1=await res.json();
        name1.innerHTML=`Name : <mark>${res1.name}</mark>`

        let res2=await fetch(`https://restcountries.com/v2/alpha/${res1.country[0].country_id}`);
        let res3=await res2.json();
        country1.innerHTML=`Country 1 : ${res3.name}`;

        probability1.innerHTML=`Probability 1 : ${res1.country[0].probability}`;

        let res4=await fetch(`https://restcountries.com/v2/alpha/${res1.country[1].country_id}`);
        let res5=await res4.json();
        country2.innerHTML=`Country 2 : ${res5.name}`;

        probability2.innerHTML=`Probability 2 : ${res1.country[1].probability}`;
        
    } catch (error) {
        console.log(error);
        
    }
}