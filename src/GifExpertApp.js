import React, {useState}  from 'react';
import { AddCategory } from './components/AddCategory';
const GifExpertApp = ()  => {


    const [categories, setCategory] = useState(['One puch', 'Samurai X', 'Dragon ball']);

    return  (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategory={ setCategory }/>

        <ol>
            {categories.map(c => {
                return <li key={c}> {c}</li>
            })}
        </ol>
    </>
    );
}

export default GifExpertApp;