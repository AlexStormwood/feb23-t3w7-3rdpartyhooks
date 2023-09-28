import { useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";


export default function NumberGrabber(){

	const params = useParams();
	// const {potato} = useParams();


	const navigate = useNavigate();

	function navigateToHome() {
		console.log("save some data or refresh a JWT or whatever else comes to mind ");

		navigate("/");
	}

	// componentDidMount
	useEffect(() => {
		setTimeout(() => {
			// blah blah thankyou for doing something, we will now redirect you 
			navigate("/");
		}, 5000);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return(
		<div>
			<h1>The number that this component grabbed is: {params.potato}</h1>
			{/* <Navigate to="/" /> */}
			<button onClick={navigateToHome} >
				Go home 
			</button>
		</div>
	)
}