import {React} from "react";
import { useSelector } from "react-redux";
import { leaderboardArray } from "../features/users/users";
const Leaderboard = () => {
    const users = useSelector(leaderboardArray)
    console.log(users)
    //TODO use selector from reducer
    return <div>Leaderboard</div>
}
export default Leaderboard