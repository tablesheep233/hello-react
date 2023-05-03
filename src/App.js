import "./App.css";
import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import MainNavigation from "./components/layout/MainNavigation";

// function App() {
//   return (
//     <div>
//       <h1>Hello!</h1>
//       <Todo title="Mime!"/>
//       <Todo title="World!"/>
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<AllMeetupsPage />}></Route>
        <Route path="/new-meetup" element={<NewMeetupPage />}></Route>
        <Route path="/favorites" element={<FavoritesPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
