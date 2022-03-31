import Header from "./components/header";
import Newsgrid from "./components/newsGrid";
import Pagination from "./components/pagination";
import Selector from "./components/selector";
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

          <Selector />

          <Newsgrid query="reactjs" page={0} />

          <Pagination />
        </div>
      </main>
    </div>
  );
}

export default App;
