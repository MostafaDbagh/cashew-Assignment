import Routes from './routes'
import {useRoutes} from 'react-router-dom';
import {useSelector} from "react-redux";
function App() {
const user  = useSelector(s => s);
const routing = useRoutes(Routes(user.user['isValid']))
  return (
    <div className="App">

{routing}
    </div>
  );
}

export default App;
