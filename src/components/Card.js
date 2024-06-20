import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;
    function clickHandler() {
        if (likedCourses.includes(course.id)) {
            //it is liked from before
            setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
            toast.error("Unliked Successfully");
        } else {
            //it is not liked from before
            //insert this course in liked course
            if (likedCourses.length === 0) {
                setLikedCourses([course.id]);
            } else {
                //if it is not empty from before then in prev add the new course id
                setLikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("Liked Successfully");
        }
    }
    return (
        <div className="w-[300px] bg-gray-100 bg-opacity-80 rounded-md overflow-hidden">
            <div className="relative">
                <img src={course.image.url}></img>
                <div className="w-[30px] h-[30px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center">
                    <button onClick={clickHandler}>
                        {likedCourses.includes(course.id) ? (
                            <FcLike className="text-red-500"></FcLike>
                        ) : (
                            <FcLikePlaceholder className="text-red-500"></FcLikePlaceholder>
                        )}
                    </button>
                </div>
            </div>
            <div className="p-4">
                <p className="text-black font-semibold text-lg leading-6">
                    {course.title}
                </p>
                <p className="mt-2 text-black">
                    {course.description.length > 100
                        ? course.description.substr(0, 100) + "..."
                        : course.description}
                </p>
            </div>
        </div>
    );
};

export default Card;
