import React, { useContext } from 'react';
import DataContext from '../context/dataContext';
import ProductDisplay from './productDisplay';

const Home = () => {
    const data = useContext(DataContext);

    return (
        <div>
            
            <h1>Home</h1>

            {/*카드컴포넌트 productDisplay*/}
            <ProductDisplay product={data.state.product}/>
            
            {/*카드컴포넌트 commentDisplay*/}
            
        </div>
    );
};

export default Home;