import React, {useState}  from 'react';
import { AddCategory } from './components/AddCategory';
import {GifGrid} from './components/GifGrid';
const GifExpertApp = ()  => {


    const [categories, setCategory] = useState(['Dragon ball']);

    return  (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategory={ setCategory }/>

        <ol>
            {
            categories.map(category => <GifGrid key={category} category={category}></GifGrid>)
            }
        </ol>
    </>
    );
}

export default GifExpertApp;