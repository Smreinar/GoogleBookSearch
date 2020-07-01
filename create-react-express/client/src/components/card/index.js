import React from 'react';
import {Container, Col, Row} from "../Grid";
import "./style.css";

// Title 
// optional subtitle
// Author
// Image
// Description
// view button (preview link)
// Saved button (adds to saved database)


function Card(props) {
    console.log(props.book.volumeInfo.previewLink);
    return(
        <Container>
            <Row>
                <Col size="lg-12">
                    <Row>
                        <Col size="lg-12">
                            <Row>
                                <h2 id="title">{props.book.volumeInfo.title}</h2>
                                <a target="_blank" id="viewbtn" className="btn btn-info ml-auto" href={props.book.volumeInfo.previewLink}>
                                    View
                                </a>
                                                {/* in onclick put in every piece of data we need, e.g. title,description,subtitle,etc. */}
                                <a target="_blank" className="btn btn-info ml-1" id="savebtn" onClick={() => props.handler(props.book.id)} bookid={props.book.id}>
                                    Save
                                </a>
                            </Row>
                            <Row>
                                <p>{props.book.volumeInfo.subtitle}</p>
                            </Row>
                            <Row>
                                <p>{props.book.volumeInfo.authors}</p>
                            </Row>
                        </Col>
                        
                    </Row>
                    <Row>
                        {/* Book Image */}
                        <Col size="lg-4">
                            <img src={props.book.volumeInfo.imageLinks.smallThumbnail}></img>
                        </Col>
                        {/* description */}
                        <Col size="lg-8">
                            <p>{props.book.volumeInfo.description}</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Card;