import { React } from "react";
import { useSelector } from "react-redux";
import { leaderboardArray } from "../features/users/users";
import LeaderboardRow from "./LeaderboardRow";

const Leaderboard = () => {
    const users = useSelector(leaderboardArray)
    const leaderboardList = users.map((user, index) => {
        const rank = index + 1
        return <LeaderboardRow key={user} id={user} rank={rank}/>
    })
    return <div>{leaderboardList}</div>
    
}


export default Leaderboard