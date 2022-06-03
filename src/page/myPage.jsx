import React, { useContext } from 'react';
import DataContext from '../context/dataContext';

const MyPage = () => {
    const data = useContext(DataContext);

    return (
        <div>
            {data.state.user}
        </div>
    );
};

export default MyPage;
