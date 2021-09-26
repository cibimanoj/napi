var x = document.createElement("H1");
var t = document.createTextNode("NATIONALIZE API");
x.appendChild(t);
document.body.appendChild(x);
const textbox=document.createElement("input")
textbox.setAttribute("type","text");
textbox.setAttribute("placeholder","ENTER YOUR NAME");
document.body.appendChild(textbox);
const button=document.createElement("input");
button.setAttribute("type","button");
button.setAttribute("value","search");
document.body.appendChild(button);
const div=document.createElement("div")
div.setAttribute('id',"div");
document.body.appendChild(div);

button.addEventListener("click",function(){
    inputsearch(textbox.value);
})

const inputsearch= async function (search){
    try{
        const res= await fetch(`https://api.nationalize.io/?name=${search}`)
        const data= await res.json();
            html=`
            <div id="container">
                <label><span>NAME:<span>${data.name}</label><br>
                <label><span>COUNTRY:<span>${data.country[0].country_id}</label><br>
                <label><span>PROBABILITY:<span>${data.country[0].probability}</label><br>
                <label><span>COUNTRY:<span>${data.country[1].country_id}</label><br>
                <label><span>PROBABILITY:<span>${data.country[1].probability}</label><br>
            </div>
                  `
                  div.innerHTML=html;
        
        console.log(data)
    }catch(e){
        console.log(e);
        html=`<p>NO RECORDS FOUND!</p>`
        div.innerHTML=html;
    }      
}
