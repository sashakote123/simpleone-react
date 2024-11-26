
import Calendar from "react-calendar";
import CreatePostPage from "./components/createPostPage/CreatePostPage";
import Form from "./components/form/Form";
import FormField from "./components/formField/FormField";
import LeftMenu from "./components/leftMenu/LeftMenu";
import MenuSearch from "./components/menuSearch/MenuSearch";
import NavBar from "./components/navBar/NavBar";
import UserCard from "./components/userCard/UserCard";
import { useState } from "react";
import ButtonsBlock from "./components/buttonsBlock/ButtonsBlock";


function App() {
  const [value, onChange] = useState(new Date());

  

  return (
    <div className="App">
      <NavBar />

      <div style={{ display: "flex", width: "100vw", height: "100vh", overflow: "hidden" }}>
        <aside style={{ flex: "1 1 auto"}}>
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
