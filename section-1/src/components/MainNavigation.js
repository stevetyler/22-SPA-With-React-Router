import { NavLink } from "react-router-dom";
import classes from './MainNavigation.module.css';

function MainNavigation() { 
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink 
                            to="/" 
                            className ={({ isActive }) => 
                                isActive ? classes.active : undefined
                            }
                            // style={({isActive}) => {
                            //     return {
                            //         color: isActive ? 'white' : '',
                            //         backgroundColor: isActive ? '#3a3a3a' : ''
                            //     };
                            // }}
                            end={true} // ensures exact matching for root path
                        >
                            Home
                        </NavLink>
                    </li>
                    <li><NavLink to="/products" className ={({ isActive }) => isActive ? classes.active : undefined
                    }>Products</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;