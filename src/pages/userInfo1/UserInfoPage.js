import { Link, useParams } from "react-router-dom";
import { UserData } from "../../common/UserData/UserData";

function UserInfoPage1() {
  let {id} = useParams()

  return (
    <div className="App">
      <h1>User Page Info 111</h1>
      <Link to={"/"}> Home</Link>
      {
        id
      }
    </div>
  );
}

export default UserInfoPage1;
