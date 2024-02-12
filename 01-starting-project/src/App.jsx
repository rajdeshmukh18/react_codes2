import reactimg from './assets/react-core-concepts.png';
import comp from './assets/components.png';
import statemgmt from './assets/state-mgmt.png';
const reactDescription=['Fundamental','Crucial','Core']
import Counter from './Counter';
import Person from './Person.jsx';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
function getRandomInt(max){
  return Math.floor(Math.random() * (max+1));
}

function Firstcomp()
{
  const description=reactDescription[getRandomInt(2)];
  return(
<>
<header> <img src={reactimg} alt="Stylized atom" />
<h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
        <h2>Time to get started!</h2>
        </header>
</>
  );
}

function CoreConcept(props){
  return(
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <Counter/>
    </li>
  );
}
function App() {
  
  return (
    <div>
      <header>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
      <Firstcomp></Firstcomp>
        <main>
          <section id="core-concepts">
            <ul>
            <CoreConcept title="Components" description="Core UI" image={comp}></CoreConcept>
            <CoreConcept title="Components2" description="Core UI2" image={reactimg}></CoreConcept>
            <CoreConcept title="Components3" description="Core UI3" image={statemgmt}></CoreConcept>
            <Person/>
            
            </ul>
          </section>
      </main>
      </header>
      
    </div>
  );
}

export default App;
