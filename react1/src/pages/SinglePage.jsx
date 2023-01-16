import {useParams, useNavigate} from "react-router-dom"; 
import MyButton from "../components/UI/button/MyButton";

const SingePage=()=>{
    const {id}=useParams();
    const navigate=useNavigate();

    const goBack=()=>navigate(-1);

    // Так плохо, лучше использовать Link
    const goHome=()=>navigate('/',{replace:true});

    return(
        <div style={{margin:"100px",display:"flex", flexDirection:"column" }}>
            <h1 style={{marginBottom:"50px"}}>Post {id}</h1>
            <MyButton onClick={goBack}>Go Back</MyButton>
            <MyButton onClick={goHome}>Go Home</MyButton>
        </div>
    )
}
export default SingePage