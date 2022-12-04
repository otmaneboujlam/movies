import './Nav.module.scss'

function Nav() {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">

                <a href="/" className="navbar-brand">Filmothèque</a>
                <button
                    className="navbar-toggler"
                    data-bs-toggle="collapse"
                    data-bs-target="#main-nav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div id="main-nav" className="collapse navbar-collapse">
                    <ul className="nav">
                        <li className="nav-item">
                            <a href="/" className="nav-link active">Catalogue</a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link active">A voir</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav