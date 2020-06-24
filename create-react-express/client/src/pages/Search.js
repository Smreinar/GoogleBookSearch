import React, { Component } from "react";
import NavBar from "../components/navbar";
import Jumbotron from "../components/jumbotron";
import {Input, SearchBtn} from "../components/form";
import {Container, Col, Row} from "../components/Grid"
import API from "../utils/API" 

class Search extends Component{
    state={
        books: [],
        search: ""
    }; 
    
    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]:value,
        });
    };


    handleFormSubmit = event => {
        event.preventDefault();
        API.getBooks((this.state.search))
        .then( data=> console.log(data)) 
        .catch(err=> console.log(err))
    }

    render() {
        return ( 
            <Container fluid>
                <NavBar/>
                <Jumbotron/>
                <Row>
                    <Col size="lg-12">

                        <form className="border border-dark">
                            <div>
                            <div style={{marginLeft:"10px",marginBottom:"5px",marginTop:"10px"}}>Book Search</div>
                            <div style={{fontSize:"13px", marginLeft:"10px",marginBottom:"10px",marginTop:"5px"}}>Book</div>
                            <Input 
                                value={this.state.search}
                                onChange={this.handleInputChange}
                                name="bookSearch"
                                placeholder="Book Title"
                            />
                            <SearchBtn 
                            onClick={this.handleFormSubmit}>
                                Search
                            </SearchBtn>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        );
    }

}

export default Search;