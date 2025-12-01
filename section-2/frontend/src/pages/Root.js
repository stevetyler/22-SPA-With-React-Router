import MainNavigation from "../components/MainNavigation"
import { Outlet, useNavigation } from "react-router-dom"

function Root() {   
    //const navigation = useNavigation();
    
    return <>
        <MainNavigation />
        <main >
            {/* <p> {navigation.state === 'loading' && 'Loading...'} </p> */}
            <Outlet />
        </main>
    </>
}   
export default Root;