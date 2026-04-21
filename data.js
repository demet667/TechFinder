const products = [
  {
    id:1,
    title:"iPhone 15 Pro",
    desc:"Smartphone ultra performant Apple",
    category:"smartphone",
    price:"1199€",
    img:"https://images.unsplash.com/photo-1695048133142-1a20484c9b4c",
    link:"#"
  },
  {
    id:2,
    title:"Samsung Galaxy S24",
    desc:"Smartphone Android haut de gamme",
    category:"smartphone",
    price:"999€",
    img:"https://images.unsplash.com/photo-1610945265064-0e34e5519bbf",
    link:"#"
  },
  {
    id:3,
    title:"PC Gamer RTX 4070",
    desc:"Setup gaming haute performance",
    category:"gaming",
    price:"1899€",
    img:"https://images.unsplash.com/photo-1593642634367-d91a135587b5",
    link:"#"
  },
  {
    id:4,
    title:"MacBook Air M2",
    desc:"Ultra portable puissant",
    category:"laptop",
    price:"1299€",
    img:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    link:"#"
  },
  {
    id:5,
    title:"TV OLED LG 4K",
    desc:"Qualité d’image exceptionnelle",
    category:"tv",
    price:"1499€",
    img:"https://images.unsplash.com/photo-1593784991095-a205069470b6",
    link:"#"
  },
  {
    id:6,
    title:"Casque Sony WH-1000XM5",
    desc:"Réduction de bruit premium",
    category:"audio",
    price:"399€",
    img:"https://images.unsplash.com/photo-1518444028785-8aefc05b7f0a",
    link:"#"
  }
];

// générer + produits automatiquement
for(let i=7;i<=60;i++){
  products.push({
    id:i,
    title:"Produit Tech "+i,
    desc:"Produit tech performant",
    category:["smartphone","gaming","laptop","tv","audio"][i%5],
    price:(Math.floor(Math.random()*800)+200)+"€",
    img:"https://picsum.photos/300?random="+i,
    link:"#"
  });
}
