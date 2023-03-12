import React from "react";
import SearchBar from "../SearchBar/SearchBar" ;
import style from "./Nav.module.css"

class Nav extends React.Component {
    constructor(props){ 
        super(props);
    }

    render (){
        return (
            <div className={style.NavBar}>
                <SearchBar onSearch={this.props.onSearch}/>
            </div>
        );
    }
}

export default Nav; 