import ReactLoading from 'react-loading';

const Loading = () => {
    return (
        <div className="loading-container">
            <ReactLoading type="spin" color="#007bff" height={90} width={90} /> 
        </div>
    )
}

export default Loading;