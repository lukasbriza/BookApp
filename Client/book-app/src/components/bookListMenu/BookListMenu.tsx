import * as React from "react";
import FinderForm from "./subComponents/FinderForm";
import Logo from "./subComponents/Logo";
class BookListMenu extends React.Component{

    render(){
        return(
            <section className="BookListMenu">
                <Logo/>
                <FinderForm/>
            </section>
        )
    }
}

export default BookListMenu;