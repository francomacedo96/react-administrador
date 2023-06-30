
const Error = ({mensaje}) => {
    return (
        <div className="bg-red-500 uppercase font-bold mt-3 rounded-lg text-white p-2 text-center">
            <p>{mensaje}</p>
        </div>

    )
}

export default Error