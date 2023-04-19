import React from 'react'
import { Link } from 'react-router-dom';
function MovieItem(props) {
    const {img, name, showId, summary } = props;
    return (
        <div className='container my-3 ' >
            <Link to={`/summary/${showId}`} style={{textDecoration:"none", color:"#c0baba"}}>
            
            <div className="card bg-dark" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt="..." style={{maxHeight:"350px", }} />
                <div className="card-body">
                    <h5 className="card-title"  >{name}</h5>
                    <p className="card-text ">{summary}</p>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default MovieItem