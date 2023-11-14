import Link from "next/link";
import classes from "./Layout.module.scss";

function Header(){
    return <div className={classes.header}>
        <div>
            <Link href="/">NextApp</Link>
        </div>
        <nav>
            <ul>
                <li>
                    <Link href="/events">Events</Link>
                </li>
            </ul>
        </nav>
    </div>
}
export default Header;