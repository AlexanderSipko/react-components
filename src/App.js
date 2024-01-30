import { createContext } from 'react';
import { ProductCorrect } from './components/ProductCorrect'

const UUID = createContext('')

function App() {

  return (
    <UUID.Provider value='12345'>
      <div className="App">
          <ProductCorrect urlPoint={'getProduc ts'}/>
      </div>
      <div className="App">
          <ProductCorrect urlPoint={'getProductsCorrect'}/>
      </div>
      <div className="App">
          <ProductCorrect urlPoint={'getProduc ts'}/>
      </div>
      <div className="App">
          <ProductCorrect urlPoint={'getProductsCorrect'}/>
      </div>
      <div className="App">
          <ProductCorrect urlPoint={'getProduc ts'}/>
      </div>
      <div className="App">
          <ProductCorrect urlPoint={'getProductsCorrect'}/>
      </div>
      <div className="App">
          <ProductCorrect urlPoint={'getProduc ts'}/>
      </div>
      <div className="App">
          <ProductCorrect urlPoint={'getProductsCorrect'}/>
      </div>
    </UUID.Provider>
  );
}

export default App;
