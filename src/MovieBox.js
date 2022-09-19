import React, { useState } from "react";
import { Modal,Button } from "react-bootstrap";

const API_IMG="https://www.themoviedb.org/t/p/w500"

const MovieBox=({title,poster_path,vote_average,release_date,overview,id})=>{
    const [show, setShow]=useState(false);
    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);

    return(
        <div className="card text-center bg-dark bg-opacity-75 bg-gradient mb-3">
            <div className="card-body">
                <img className="card-img-top" src={API_IMG+poster_path} alt=""/>
                <div className="card-body">
                    <button type="button" className="btn btn-danger bg-gradient" onClick={handleShow}>More</button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>
                                <h3>{title}</h3>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img className="card-img-top" style={{width:'16rem'}} src={API_IMG+poster_path} alt=""/>
                            <h4>IMDB: {vote_average}</h4>
                            <h5>Release: {release_date}</h5>
                            <br></br>
                            <p>{overview}</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button varient="secondary" className="btn btn-danger" onClick={handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default MovieBox;

