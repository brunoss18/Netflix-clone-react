import "./App.css";
import Row from "./components/row";
import categories from "./api";
import Banner from "./components/banner";
import Nav from "./components/nav";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      {categories.map((category) => {
        return(<Row 
          key={category.name}
          title={category.title}
          path={category.path} 
          isLarge={category.isLarge}
          />
          );
      })}
      <Footer/>
    </div>
    
  );
}

export default App;
