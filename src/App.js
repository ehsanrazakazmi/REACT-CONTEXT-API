import './App.css';
import Item from './components/Item';
import Cart from './components/Cart';
function App() {
  return (
    <>
    <div className="App">
      <Item name="ipad" price={2000} />
      <Item name="macbook" price={4500} />
      <Item name="mobile" price={3500} />
      <Cart></Cart>
    </div>
    </>
  );
}

export default App;
