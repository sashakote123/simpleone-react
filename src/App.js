import CreatePostPage from "./components/createPostPage/CreatePostPage";
import LeftMenu from "./components/leftMenu/LeftMenu";
import NavBar from "./components/navBar/NavBar";



function App() {

  return (
    <div className="App">
      <NavBar />

      <div style={{ display: "flex", width: "100vw", height: "100vh", overflow: "hidden" }}>
        <aside style={{ flex: "1 1 auto" }}>
          <LeftMenu />
        </aside>
        <main style={{ flex: "1 1 auto", overflow: "auto" }}>
          <CreatePostPage />
        </main>
      </div>





    </div>
  );
}

export default App;
