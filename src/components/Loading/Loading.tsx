import style from './Loading.module.scss'

function Loading() {
    return (
        <div className="d-flex flex-row justify-content-center aligns-items-center w-100">
            <img src="/assets/images/loading.gif" alt="loading gif" />
        </div>
    )
}

export default Loading