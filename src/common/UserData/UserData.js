import { useEffect, useState } from "react"
import { connect, useDispatch, useSelector } from "react-redux"
import { setUserData } from "../../redux/actions/action"
import UserDataService from "../../services/UserDataService"

export const UserData = (props) => {

    const userData = useSelector((state) => state.feature.userData)
    const dispatch = useDispatch()

    useEffect(() => {
        UserDataService.getData()
            .then((response) => {
                dispatch(setUserData(response))
                //setUserData(response)
            })
    }, [])

    //console.log(userData)
    console.log("IN Render ")

    return (<div>
        <h1> Testing Component</h1>
        {
            <div>
                <h1>
                    {userData?.title}
                </h1>
                <h1>
                    {userData?.completed}
                </h1>
                <form>
                    <input></input>
                </form>
                <table>
                    
                </table>
            </div>
        }
    </div>)
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         setUserData: (payload) => dispatch(setUserData(payload))
//     }
// }
// const mapStateToProps = (state) => {
//     return {
//         userData : state.feature.userData
//     }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(UserData)
