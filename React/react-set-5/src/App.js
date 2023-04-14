import logo from "./logo.svg";
import "./App.css";
import UserStatus from "./Components/UserStatus";
import ProductsList from "./Components/ProductsList";
import UserProfile from "./Components/UserProfile";
import UserFeed from "./Components/UserFeed";
import ChatData from "./Components/Q6/ChatData";
import Comments from "./Components/Q7/Comments";

function App() {
  return (
    <div>
      {/* <UserStatus /> */}
      {/* <ProductsList /> */}
      {/* <UserProfile heading={"User Profile"} height={200} width={300} /> */}
      {/* <UserFeed /> */}
      {/* <ChatData /> */}
      <Comments />
    </div>
  );
}

export default App;
