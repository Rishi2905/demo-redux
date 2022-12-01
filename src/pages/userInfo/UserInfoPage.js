import { Link } from "react-router-dom";
import { UserData } from "../../common/UserData/UserData";

function UserInfoPage() {
  return (
    <div className="App">
      <h1>User Page Info</h1>
      <Link to={"/"}> Home</Link>
      <UserData></UserData>
    </div>
  );
}

export default UserInfoPage;
