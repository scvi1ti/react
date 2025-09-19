// import logo from './logo.svg';
import './App.css';
import { Btnmain } from './button.tsx';
import { Username } from './username.tsx';
import { Burger } from './burger.tsx';
import { SignIn } from './sign.tsx';

function App() {
  return (
    <div className='Wrapper'>
    
      <Btnmain /> 
      <Username username='Artem Malkin' />
      <SignIn  text='Sign In'/>
      <Burger />
      
    
  
    </div>
  );
}

export default App;


