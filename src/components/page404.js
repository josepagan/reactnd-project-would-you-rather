import { React, useState } from "react";
import { Redirect } from "react-router";

const Page404 = () => {
    const [clicked, setClicked] = useState(false)
    return clicked ? <Redirect to="/" /> :
    (<div>
        <div>
            Sorry the page you have requested does not exist
        </div>
        <button onClick={() => { setClicked(true) }}>RETURN TO HOME</button>
    </div>)
}

export default Page404