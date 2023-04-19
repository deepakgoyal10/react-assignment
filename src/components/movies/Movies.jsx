import React, { useEffect, useState } from 'react'
import MovieItem from '../movieItem/MovieItem'

function Movies(props) {

  const {check} = props

  const [shows, setShows] = useState([])

  const fetchData = async () => {
    let url = "https://api.tvmaze.com/search/shows?q=all"
    let data = await fetch(url);

    let parsedData = await data.json()
    setShows(parsedData)

  }

  useEffect(() => {
    fetchData()
  }, [])

console.log(check)

  return (
    <div className='container my-3'>
      <h2 className='text-light'>Movie365 - Recommendation for you</h2>
      <div className="container">
        <div className="row ">
          {shows.map((show) => {

            function stripHtmlTags(html) {
              return html.replace(/<[^>]*>?/gm, "");
            }

            return (
              <div className="col-md-3" style={{ width: "300px" }} key={show.show.id} >
                <MovieItem img={show.show.image ? show.show.image.original : "https://thumbs.dreamstime.com/b/flying-popcorn-film-clapper-board-isolated-black-background-concept-watching-tv-cinema-flying-popcorn-film-183047335.jpg"} name={show.show.name} url={show.show.url} summary={show.show.summary ? stripHtmlTags(show.show.summary).slice(0, 50) + "..." : " Summary not found "} showId={show.show.id} />

              </div>
            )
          })}

        </div>
      </div>
    </div>
  )
}

export default Movies