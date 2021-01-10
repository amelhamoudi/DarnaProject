import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Slide from './components/Header/Slide';
import Blog from './components/blog/Blog';

import store from "./store";
import { Provider } from "react-redux";
import DetailAction from './components/DetailAction/DetailAction';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <Header></Header>
     <DetailAction></DetailAction>

     <Footer></Footer>
 {/*         

         */}
      </div>
    </Provider>
  );
}

export default App;


/*
<Provider store={store}>
    <div className="App">
     <Header></Header>
     <Slide></Slide>
     <Blog></Blog>
     <Footer></Footer>
 */    

      
