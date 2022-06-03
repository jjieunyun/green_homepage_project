//🍎context API를 이용해서 데이터를 공용으로 사용
import { createContext, useState } from 'react';


//내보낸 DataContext를 통해 value값을 넣어주어 사용
export const DataContext = createContext();


const DataProvider = ({children}) => {
    const [user, setUser] = useState('임의의 값');
    const [comments,  setComments] = useState([{
        id : 1,
        commentProduct : '책',
        user : 'Green',
        commentText : 'Good',
        commentIMG : null, 
    }]);

    const [product, setProduct] = useState({
        id : Date.now(),
        productName : '책',
        productText : '설명',
        productIMG : 'https://freeiconshop.com/wp-content/uploads/edd/book-flat.png',
    })

    //state와 action으로 분리
    const value = {
        state : { user, comments, product },
        action : { setUser, setComments,  setProduct }
    }
    //⭐children을 props로 받아와서 value값을 사용한 컴포넌트를 넘겨줌
    return <DataContext.Provider value={value}>{ children }</DataContext.Provider>
}

//🌳consumer작성
//DataContext.Consumer 라고 사용하는 내용을 'DataConsumer'로 사용
const { Consumer : DataConsumer } = DataContext;

//컴포넌트로 쓰기 위한 provider와 consumer
export {DataProvider, DataConsumer};
//값을 가져와서 쓰기 위한 default context api
export default DataContext;