import React from "react";


const Search = ({searchTerm, setSearchTerm}) => {
    return (
        <div className="search">
            <div>
                <img src={"search.svg"} alt={"search"} />
                <input
                type={"text"}
                placeholder={"Search through thousands of movies"}
                defaultValue={searchTerm}
                onChange={(e) => searchTerm = e.target.defaultValue}
                />
            </div>
        </div>
    )
}

export default Search;