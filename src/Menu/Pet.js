import { useNavigate } from "react-router-dom"

const Pet = () => {
    const navigate = useNavigate();
    return (<>
        <div>
            <h1>ini Pet bro</h1>
            <button onClick={() => navigate('/')} className="bg-green-300 px-4 py-2 mt-5 rounded-md">Back to Home</button>
        </div>
    </>)
}
export default Pet