import React, { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";


const GifExpertApp = () => {
    // const categories = ['One punch', 'Samurai x', 'Dragon ball'];
    const [categories, setcategories] = useState(['One punch']);
    // const handleAdd = () => {
    //     // setcategories([...categories, 'hamsterxhamster']);
    //     setcategories(cats => [...cats, "HunterxHunter"]);   
    // };
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setcategories} />
            <hr />
            <ol>
                {
                    categories.map((category, i) =>
                        <GifGrid
                            key={category}
                            category={category} />
                    )
                }
            </ol>

        </>
    );
}


export default GifExpertApp;