import './App.css'
import ComponenteFilho from './components/ComponenteFilho'
import Imagens from './components/Imagens'
import IsVisible from './components/IsVisible'
import Lista from './components/Lista'
import Tabela from './components/Tabela'
import cat from './assets/cat.jpg'
import ocean from './assets/ocean.jpg'
import stadium from './assets/stadium.jpg'
import IsHighlifhted from './components/isHighlighted'
import ListaTarefas from './components/ListaTarefas'
import Card from './components/Card'
import Fragmentos from './components/Fragmentos'
import ImagensComTextoAlternativo from './components/Objetos-img'

const pessoas = [
  { id: 1, nome: 'Guilherme', idade: 25 },
  { id: 2, nome: 'CR7', idade: 30 },
  { id: 3, nome: 'Messi', idade: 35 },
];

const listaDeImagens = [
  { url: cat, altText: 'Gato' },
  { url: ocean, altText: 'Oceano' },
  { url: stadium, altText: 'Estádio' },
];

const imagensArray = [cat, ocean, stadium, '']



function App() {
  const nomes = ['Guilherme', 'Jailson', 'Santos Fc']

  return (
    <>
      <div>
        <Lista nomes={nomes} />
      </div>

      <div>
        <ComponenteFilho />
      </div>

      <div>
        <IsVisible isvisible={true} />
        <IsVisible isvisible={false} />
      </div>

      <div>
        <Tabela dados={pessoas} />
      </div>

      <div>
        <Imagens imagens={imagensArray} />
      </div>

      <div>
        <IsHighlifhted mudarcor={true} />
        <IsHighlifhted mudarcor={false} />
      </div>

      <div>
        <ListaTarefas />
      </div>

      <div>
        <Card />
      </div>

      <div>
        <Fragmentos />
      </div>

      <div>
        <h1>Imagens com Texto Alternativo Dinâmico</h1>
        <ImagensComTextoAlternativo imagens={listaDeImagens} />
      </div>
    </>
  )
}

export default App



