import { useParams } from "react-router-dom";


export default function NumberGrabber(){

	const params = useParams();
	// const {potato} = useParams();

	return(
		<div>
			<h1>The number that this component grabbed is: {params.potato}</h1>
		</div>
	)
}