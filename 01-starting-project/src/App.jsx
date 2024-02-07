import reactimg from './assets/react-core-concepts.png';
import comp from './assets/components.png';
import statemgmt from './assets/state-mgmt.png';
const reactDescription=['Fundamental','Crucial','Core']
import Counter from './Counter';
import Person from './Person.jsx';
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
