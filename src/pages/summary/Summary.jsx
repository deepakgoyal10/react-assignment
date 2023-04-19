import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import "./summary.scss"

function Summary() {
  const { id } = useParams();
  const [ show, setShow ] = useState(null);


  useEffect(() => {
    const fetchShow = async () => {
      const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
      const data = await response.json();
      setShow(data);
    };
    fetchShow();
  }, [id]);

  console.log(show)




  const [formData, setFormData] = useState({mName: ""})

  const ticketForm = (show) =>{
    ref.current.click()
    setFormData({mName: show.name})
  }

  const onChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
}



  const handleSubmit = () => {
    refClose.current.click()
    alert("Your ticket has been booked sucessfully")
  }


  const ref = useRef(null)
  const refClose = useRef(null)
  






  if (!show) {
    return <h2 style={{color:"#afafaf"}} >Loading...</h2>;
  }




  return (<>




<div>
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch modal
            </button>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Ticket From</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <form className='my-3' >
                                <div className="mb-3" style={{width:"95%"}}>
                                    <label htmlFor="title" className="form-label">Movie Name</label>
                                    <input type="text" className="form-control" value={formData.mName} id="mName" name="mName" aria-describedby="emailHelp"   minLength={3} required />
                                </div>
                                <div className="mb-3" style={{width:"95%"}}>
                                    <label htmlFor="title" className="form-label">Enter Your Name</label>
                                    <input type="text" className="form-control"  id="userName" name="userName" aria-describedby="emailHelp" onChange={onChange}  minLength={3} required />
                                </div>
                                <div className="mb-3 " style={{width:"95%"}}>
                                    <label htmlFor="title" className="form-label">Enter Your Mobile No.</label>
                                    <input type="tel" className="form-control"  id="mobile" name="mobile" aria-describedby="emailHelp" onChange={onChange}  minLength={3} required />
                                </div>
                                

                            </form> 
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal"> Go back</button>
                            <button type="button"  onClick={handleSubmit} className="btn btn-primary">  Confirm booking</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    <div className="summary" >
      <div className="image">
      <img src={show.image?show.image.original:'https://thumbs.dreamstime.com/b/flying-popcorn-film-clapper-board-isolated-black-background-concept-watching-tv-cinema-flying-popcorn-film-183047335.jpg'} alt={show.name} />
      </div>
      <div className="details">

      <h2>{show.name}</h2>
      {show.summary?<div  dangerouslySetInnerHTML={{ __html: show.summary }}></div>:"No summary available"}
      <hr />
      <div>Language: {show.language?show.language:"N/A"}</div>
      <div>genres: {show.genres?show.genres: "N/A"}</div>
      <div>rating: {show.rating.average ? show.rating.average: "N/A"}</div>
      <div>premiered on: {show.premiered?show.premiered:"NA"}</div>

      
      <button onClick={()=>{ ticketForm(show) }} >Book a ticket</button>
      </div>
    </div>
    </>
  );
}

export default Summary;
