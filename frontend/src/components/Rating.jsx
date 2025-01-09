import { Star, StarHalfIcon, StarIcon, StarOff, StarOffIcon } from "lucide-react";
import { StarHalf } from "lucide-react";

const Rating = ({ rating }) => {




    return (
        <div className="flex ">
            {rating >= 1 ? <span><StarIcon size={"20px"} fill="orange" /></span> : rating > 0.5 ? <span ><Halfstar/></span> : <span><StarIcon size={"20px"} /></span>}
            {rating >= 2 ? <span><StarIcon  size={"20px"} fill="orange" /></span> : rating >= 1.5 ? <span><Halfstar/></span> : <span><StarIcon size={"20px"}/></span>}
            {rating >= 3 ? <span><StarIcon  size={"20px"} fill="orange" /></span> : rating >= 2.5 ?  <span><Halfstar/></span> : <span><StarIcon size={"20px"} /></span>}
            {rating >= 4 ? <span><StarIcon  size={"20px"} fill="orange" /></span> : rating >= 3.5 ?  <span><Halfstar/></span> : <span><StarIcon size={"20px"} /></span>}
            {rating >= 5 ? <span><StarIcon  size={"20px"} fill="orange" /></span> : rating >= 4.5 ? <span><Halfstar/></span> : <span><StarIcon  size={"20px"}/></span>}


        </div>
    );
}

const Halfstar = () => {
    return <StarIcon  size={"20px"}>
        <StarHalf fill="orange" />
    </StarIcon>
}

export default Rating