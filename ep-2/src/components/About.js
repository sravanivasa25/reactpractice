import User from "./User";
import UserClass from "./UserClass";
const About = ()=>{
    return(
        <div>
            <h1>About us</h1>
            <p>This is sravani vasa</p>
            <User name='sravani vasa' location='Banglore'/>
            <UserClass name='sravani vasa(class component)' location='Banglore(class component)' />
        </div>
    )
}
export default About;