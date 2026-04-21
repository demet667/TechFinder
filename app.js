let current="all";
let searchTerm="";

/* RENDER */
function render(){
  const container=document.getElementById("products");

  const list=products.filter(p =>
    (current==="all" || p.category===current) &&
    p.title.toLowerCase().includes(searchTerm)
  );

  container.innerHTML=list.map(p=>`
    <div class="card">
      <img src="${p.img}">
      <h3>${p.title}</h3>
      <p>${p.price}</p>
      <button onclick="openPopup(${p.id})">Voir</button>
      <a href="${p.link}" target="_blank" class="buy-btn">Acheter</a>
    </div>
  `).join("");
}

/* FILTER */
function filterCategory(cat){
  current=cat;
  render();
}

/* SEARCH */
document.getElementById("search").addEventListener("input",(e)=>{
  searchTerm=e.target.value.toLowerCase();
  render();
});

/* POPUP */
function openPopup(id){
  const p=products.find(x=>x.id===id);

  popupImg.src=p.img;
  popupTitle.innerText=p.title;
  popupDesc.innerText=p.desc;
  popupLink.href=p.link;

  popup.classList.remove("hidden");
}

function closePopup(){
  popup.classList.add("hidden");
}

render();
