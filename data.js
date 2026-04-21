const products = [];

const categories = ["smartphone","laptop","gaming","tv","audio","camera","accessoire"];

for(let i=1;i<=100;i++){
  products.push({
    id:i,
    title:"Produit Tech "+i,
    desc:"Produit performant et recommandé.",
    category:categories[i % categories.length],
    price:(Math.floor(Math.random()*900)+100)+"€",
    img:"https://picsum.photos/300?random="+i,
    link:"#"
  });
}
