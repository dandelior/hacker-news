import Header from "./components/header";
import Newsgrid from "./components/newsGrid";
import Pagination from "./components/pagination";
import Selector from "./components/selector";
import Tabs from "./components/tabs";

import "./styles/App.sass";

function App() {
  return (
    <div className="theApp">
      <Header />
      <main>
        <div className="content">
          <Tabs />

          <Selector />

          <Newsgrid />

          <Pagination />
        </div>
      </main>
    </div>
  );
}

export default App;
