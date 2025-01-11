// import { LearnComponent } from "./Components/LearnComponent";

import { ArraySample } from "./Components/ArraySample";
import { ChildComponent } from "./Components/ChildComponent";
import Header from "./Components/Header";
import { MultiComponent } from "./Components/MultiComponent";
import { OneofSample } from "./Components/OneofSample";
import { Student } from "./Components/Student";
import './Css/App.css'



function App() {
  

const items = [
  {id:1 , name: "Niresh"},
  {id:2 , name: "Mani"},
  {id:3 , name: "Jhon"},
  {id:4 , name: "Master"},
]









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

<ArraySample items= {items}/>
<OneofSample color ="green"/>
<MultiComponent value = "Hello this is multip type comonent string"/>
<MultiComponent value = {26}/>
<MultiComponent value = {true}/>
    </>
  );
}

export default App
