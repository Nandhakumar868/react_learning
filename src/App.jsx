import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col justify-center">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
// className="flex flex-col w-[100vwh] h-[100vwh] items-center justify-center bg-gray-400"