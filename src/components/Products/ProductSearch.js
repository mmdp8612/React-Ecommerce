import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const ProductSearch = ({handlerSearch}) => {
    return (
        <form onSubmit={handlerSearch} className="row">
            <div className="col-md-9">
                <label className="visually-hidden">Buscar</label>
                <input type="text" className="form-control" name="search" placeholder="Palabra clave" />
            </div>
            <div className="col-md-3">
                <button type="submit" className="btn btn-primary mb-3 w-100">
                    <FontAwesomeIcon icon={faSearch} />
                    &nbsp; Realizar Busqueda
                </button>
            </div>
        </form>
    )
}

export default ProductSearch;