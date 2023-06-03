
import "./App.css"
import { Home, Login } from "./components";
import {useAuthState} from "react-firebase-hooks/auth"
import { auth } from "./firebase";

function App() {
  const [user,loading] = useAuthState(auth)
  // console.log(user)
  return (
    <div className="App">
        {
          !user ?
          <Login/> : 
          <Home/>
        }
    </div>
  );
}

export default App;
