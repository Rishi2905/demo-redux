import { useContext } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { setCount } from "../../redux/actions/action";
import { UserContext } from "../../pages/user/UserListing";
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

export const Counter = () => {

    const count = useSelector((state) => state.feature.count)
    const dispatch = useDispatch()
    // const user = useContext(UserContext)
    // console.log(user);

    return (
        <div>
            <h1>
                Counter
            </h1>
            <h1>
                {
                    count
                }
            </h1>

            <div></div>
            <button onClick={() => {
                dispatch(setCount(count + 1))
                //props.setCount(props.count + 1)
            }}>
                Increment
            </button>
            <div>
                
            </div>
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         count: state.feature.count
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         setCount: (payload) => dispatch(setCount(payload))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(counter)