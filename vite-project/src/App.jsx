// import { LearnComponent } from "./Components/LearnComponent";

import { ChildComponent } from "./Components/ChildComponent";
import Header from "./Components/Header";
import { Student } from "./Components/Student";
import './Css/App.css'



function App() {
  

  return (
    <>
{/*     <>Niresh react learing</>
    <LearnComponent/> */}
    <Header/>
<Student name="Niresh" age={26} isMarried ={true}/>
<Student name="Ajith" age={27} isMarried ={false}/>
<Student name="Gokul" age={23} isMarried ={true}/>
<p>This is default propes</p>
<Student />
<ChildComponent>
<p>This is a sample child component para 1 </p>
<p>This is a sample child component para 2</p>

</ChildComponent>
    </>
  );
}

export default App
