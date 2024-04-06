const titulo = document.createElement("h1");
titulo.id = "titulo";
titulo.innerText = "Iphone 15 Pro Max";
const body = document.querySelector("body");
body.appendChild(titulo);

let produto = document.createElement("div");
produto.innerHTML = `
  <div>
    <h2>Apple</h2>
    <img src="https://m.media-amazon.com/images/I/81IPGZtygYL._AC_SX679_.jpg" 
    alt="Iphone">
    <p>256 GB, Titânio preto </p>
    <p id="precoiphone">R$ 8.729,00</p>
  </div>
`;

// Adicionando o elemento no dom
body.appendChild(produto)
