import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function({selectedProduct, show, handleClose}){
    if(show){
    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProduct.pname}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container>
                <Row>
                    <Col><strong>Product Description</strong></Col>
                    <Col>
                    {selectedProduct.pdesc}
                    </Col>
                </Row>
                <Row>
                    <Col><strong>
                    Price
                        </strong> 
                        </Col>
                    <Col>
                    {selectedProduct.price}
                    </Col>
                </Row>
                <Row>
                    <Col><strong>Quantity</strong></Col>
                    <Col>
                    {selectedProduct.quantity}
                    </Col>
                </Row>
            </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )}
}

// Us the below code to test if modal is not working
// export default function({selectedProduct, onClose}){
//     return (
//         <>
//         <fieldset>
//             <legend>Selected Product</legend>
//             { selectedProduct &&
//             <input type="text" value={selectedProduct.id} readOnly />
//             }
//         </fieldset>
//         </>
//     )
// }