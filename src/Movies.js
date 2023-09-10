import React from 'react'

const Movies = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Extinction",
      genre: "action",
      img: "https://imgs.search.brave.com/UVxyt3397OoqEnSFg5O1sedSP_beMtlro-oJEDWPeTg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tbHBu/azcyeWNpd2MuaS5v/cHRpbW9sZS5jb20v/Y3FoaUhMYy5JSVpT/fjJlZjczL3c6YXV0/by9oOmF1dG8vcTo3/NS9odHRwczovL2Js/ZWVkaW5nY29vbC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTgvMDcvZXh0aW5j/dGlvbi5qcGc",
    },
    {
      id: 2,
      title: "Maniac",
      genre: "comedy",
      img: "https://imgs.search.brave.com/962C_gFciXqvwDOfL9bocFpcXxYcmUEy75kHlmoaSOM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMyLnNob3d0aW1l/cy5jb20vcG9zdGVy/LzY2MHg5ODAvbWFu/aWFjLW5ldGZsaXgt/MTMxMjQxLmpwZw",
    },
    {
      id: 3,
      title: "You",
      genre: "drama",
      img: "https://imgs.search.brave.com/oqM7kmp6fhU6_BEVORDmVUssXd3cNE7X7UyzJrt0ggg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzM4NzM1MTM4L3Iv/aWwvOTMxYThmLzQ3/MjM3MDA1NDYvaWxf/NjAweDYwMC40NzIz/NzAwNTQ2XzNoYjYu/anBn",
    },
  ] ) }
    ;
  return (
    const [title, setTitle] = useState('dev') 
    
      <div>
        {movies.map((movies)=>{
          console.log(movies);
          return(
          <Movies 
          title={movies.title} 
          genre={movies.genre} 
          img= {movies.img}
          />);
        })}
      </div>
    export default Movies;