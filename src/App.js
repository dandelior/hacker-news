import Header from "./components/header";
import Newsitem from "./components/newsItem";
import Pagination from "./components/pagination";
import Selector from "./components/selector";
import Tabs from "./components/tabs";

function App() {
  return (
    <div className="theApp">
      <Header />
      <main>
        <div className="content">
          <Tabs />

          <Selector />

          <div className="news-grid">
            <Newsitem />
          </div>

          <Pagination />
        </div>
      </main>
    </div>
  );
}

export default App;
