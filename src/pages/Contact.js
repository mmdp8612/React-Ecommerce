const Contact = () => {

    const handlerSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <h1 className="text-center">Contacto</h1>
            <p className="text-center">A continuacion haga su consulta y a la brevedad nos pondremos en contacto.</p>
            <form onSubmit={handlerSubmit}>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Apellido</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Consulta</label>
                    <textarea type="text" className="form-control"></textarea>
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary w-100">
                        Enviar consulta
                    </button>
                </div>
            </form>
            
        </>
    )
}

export default Contact;