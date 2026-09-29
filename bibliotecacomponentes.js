class ComponenteUI {
  constructor(nome, categoria, tagHTML) {
    this.nome = nome;
    this.categoria = categoria;
    this.tagHTML = tagHTML;
  }
}

class Catalogo {
  constructor() {
    this.componentes = [];
  }

  registrarComponente(componente) {
    if (!componente.tagHTML || componente.tagHTML.trim() === "") {
      return;
    }

    this.componentes.push(componente);
  }
}

function buscarPorCategoria(catalogo, termo) {
  const resultado = [];

  for (let i = 0; i < catalogo.componentes.length; i++) {
    if (
      catalogo.componentes[i].categoria.toLowerCase() ===
      termo.toLowerCase()
    ) {
      resultado.push(catalogo.componentes[i]);
    }
  }

  return resultado;
}

const cat = new Catalogo();

cat.registrarComponente(
  new ComponenteUI("PrimaryButton", "Botoes", "<button>")
);

console.log(buscarPorCategoria(cat, "Botoes"));
