import TweetsPage from "./components/tweets/TweetsPage";

import "./App.css";
import Button from "./components/shared/button";
import LoginPage from "./components/auth/LoginPage";

function App() {
  return (
    <div className="App">
      {/*<TweetsPage />*/}

      <LoginPage />
      {/*<Button variant='secondary' onClick={(event) => console.log(event)}>Click me!</Button>
      <Button variant='primary' onClick={(event) => console.log(event)}>Click me!</Button>
  <Button variant='primary' disabled onClick={(event) => console.log(event)}>Click me!</Button>*/}
    </div>
  );
}

export default App;
