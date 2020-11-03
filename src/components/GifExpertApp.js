import React, { useState } from "react";
import { AddCategory } from "./AddCategory";

const GifExpertApp = () => {
    // const categories = ['One punch', 'Samurai x', 'Dragon ball'];
    const [categories, setcategories] = useState(['One punch', 'Samurai x', 'Dragon ball']);
    // const handleAdd = () => {
    //     // setcategories([...categories, 'hamsterxhamster']);
    //     setcategories(cats => [...cats, "HunterxHunter"]);
    // };
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory />
            <hr />
            <ol>
                {
                    categories.map((category, i) => {
                        return <li key={category}>{category}</li>;
                    })
                }
            </ol>

        </>
    );
}


export default GifExpertApp;