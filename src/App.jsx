
import './App.css'
import Effect from './EffactHooks'
import UseState from './state'


function App() {
  
  const eventHandalar = () => {
    alert('HI Welcome Rony from React')
  }

  const eventHandalar2 = (num)=>{
   return alert(num)
  }



  return (
    <>
      <h1 className="heading">React Core Consept 2</h1>

     <UseState></UseState>
     <Effect></Effect>


      {/* <button onClick={eventHandalar}>Btn</button>
      <button onClick={() => { alert('HI') }}>Btn2</button>
      <button onClick={function () { alert('HI world') }}>Btn3</button>
      <button onClick={()=>{eventHandalar2(5)}}>Btn4</button> */}
    </>
  );
}

export default App
