import style from './MovieItem.module.scss'

function MovieItem({ movie }: any) {
    return (
        <div
            style={{ cursor: 'pointer' }}
            data-bs-target="#movie-details-modal"
            data-bs-toggle="modal"
            className={`card text-center m-2 ${style.card}`}>
            <img className="card-img-top" src={movie.img} alt="Affiche du film" />
            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <hr className="w-75 mx-auto" />
                <p className="card-text">{movie.desc}</p>
            </div>
        </div>
    )
}

export default MovieItem