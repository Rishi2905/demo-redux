import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setFirstName, setLastName, setUserInArray } from "../../redux/actions/action";

function Home() {
    const navigate = useNavigate()
    const userArray = useSelector(state => state.feature.userArray)
    const user = useSelector(state => state.feature.user)

    const dispatch = useDispatch()
    return (
        <div className="App">
            <h1> Home</h1>
            <button onClick={() => {
                navigate('/pages/userInfo')
            }}>
                User Info
            </button>

            <button onClick={() => {
                navigate('/pages/userInfo/16')
            }}>
                User Info111111
            </button>
            <form style={{ marginTop: 100 }}>
                <label for="fname">First name:</label>
                <input type="text" id="fname" name="fname" value={
                    user.firstName
                }
                    onChange={(e) => {
                        dispatch(setFirstName(
                            e.target.value
                        ))
                    }} />
                <div></div>
                <label for="lname">Last name:</label><br></br>
                <input type="text" id="lname" name="lname" value={
                    user.lastName
                }
                    onChange={(e) => {
                        dispatch(setLastName(
                            e.target.value
                        ))
                    }}
                />
                <div></div>
                <input type="submit" value="Submit" onClick={(e) => {
                    dispatch(setUserInArray(user))
                    e.preventDefault()
                    return false;
                }} />
            </form>
            <div>
                <h1>
                    User Listing
                </h1>
                {
                    userArray.map((item) => {
                        return <div>
                            {item.firstName}
                            {item.lastName}
                        </div>
                    })
                }
            </div>
        </div>

    );
}

export default Home;
