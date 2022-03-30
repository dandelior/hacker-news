import Newsitem from "./components/NewsItem";
import Pagination from "./components/pagination";
import Selector from "./components/selector";
import Tabs from "./components/tabs";

function App() {
  return (
    <div className="theApp">
      <header>
        <h1>HACKER NEWS</h1>
      </header>
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
