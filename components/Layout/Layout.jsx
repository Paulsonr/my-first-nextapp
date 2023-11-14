import Header from './Header';
import classes from "./Layout.module.scss";

function Layout(props){
    return <>
        <Header/>
        <div className={classes.layout}>
            <main>{props.children}</main>
        </div>
    </>
}
export default Layout;