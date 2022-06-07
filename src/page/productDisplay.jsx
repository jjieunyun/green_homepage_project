import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import DataContext from '../context/dataContext';
import CommentForm from './comment-form';

const ProductDisplay = ({product}) => {
    //console.log(product)
    const data = useContext(DataContext);


    return (
    <Card style={{ width: '18rem' }}>
    <Card.Img  style={{ padding: '1.5rem' }} variant="top" src={product.productIMG} />
    <Card.Body>
        <Card.Title>{product.productName}</Card.Title>
        <Card.Text>
        {product.productText}
        </Card.Text>
        <Button variant="primary">구매</Button>
    </Card.Body>
    <CommentForm/>

    <Card.Footer>
        {/*product를 비교해서 가져와야함. 아래는 전체를 가져오는 코드*/}
        {
            data.state.comments.map(comment=> <li key={comment.id}>
                {comment.user} : {comment.commentText}
                <div id='img_box' style={{width:'100px', height:'50px', backgroundImage:`url(${comment.commentIMG})`}}></div>
            </li>)
        }
        
    </Card.Footer>
    </Card>
    );
};

export default ProductDisplay;