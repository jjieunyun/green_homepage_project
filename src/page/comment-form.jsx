import React, { useContext, useState } from 'react';
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { DataContext } from '../context/dataContext';

const CommentForm = () => {
    const [show, setShow] = useState(false);
    const [text, setText] = useState('')
    const data = useContext(DataContext)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onChange = (event)=> {
        setText(event.target.value);
    }
    const addComment = () => {
        const nextComment = {
            id : data.state.id,
            user : data.state.user,
            commentProduct : null, //props값으로 받아와서 넣기
            commentIMG : null, //기능 확인 후 넣기
            commentText : text
        }
        data.action.setComments([...data.state.comments, nextComment]);
        handleClose();
    };

    return (
        <>
            <Button variant="dark" onClick={handleShow}>
                후기 작성
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>후기를 작성해주세요</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                {/*코멘트 적는 란*/}
                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                    <Form.Control
                    onChange={onChange}
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '100px' }}
                    />
                </FloatingLabel>

                {/*파일 가져오기*/}
                <Form.Group controlId="formFile" className="m-3">
                    <Form.Label>추가할 이미지를 선택하세요</Form.Label>
                    <Form.Control 
                        onChange={onChange}
                        accept='image/*' 
                        type="file" />
                </Form.Group>

                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    취소
                </Button>
                <Button variant="primary" onClick={addComment}>
                    작성
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};


export default CommentForm;