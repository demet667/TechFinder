let currentFilter="all";

const grid=document.getElementById("products");
const search=document.getElementById("searchInput");

/* RENDER */
function render(){
  const term=search.value.toLowerCase();

  const filtered=products.filter(p =>
    (currentFilter==="all"||p.category===currentFilter) &&
    p.title.toLowerCase().includes(term)
  );

  grid.innerHTML=filtered.map(p=>`
    <div class="card">
      <img src="${p.img}">
      <div class="card-body">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="price">${p.price}</div>
        <button onclick="openPopup(${p.id})">Voir</button>
        <a href="${p.link}" target="_blank" class="buy-btn">Acheter</a>
      </div>
    </div>
  `).join("");
}

/* FILTER */
document.querySelectorAll(".filters button").forEach(btn=>{
  btn.onclick=()=>{
    document.querySelectorAll(".filters button").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter=btn.dataset.filter;
    render();
  }
});

/* SEARCH */
search.addEventListener("input",render);

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
