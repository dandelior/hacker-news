import Header from "./components/header";
import Newsgrid from "./components/newsGrid";
import Tabs from "./components/tabs";

import "./styles/App.sass";

function App() {
  const atChangeTab = (e) => {
    console.log(e);
  };

  return (
    <div className="theApp">
      <Header />
      <main>
        <div className="content">
          <Tabs detectClick={atChangeTab} />

          <Newsgrid />
        </div>
      </main>
    </div>
  );
}

export default App;
