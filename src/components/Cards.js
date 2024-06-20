import React from "react";
import Card from "./Card";
import { useState } from "react";
const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;
    // let [category, setCategory] = useState("All");
    let [likedCourses, setLikedCourses] = useState([]);

    const getCourses = () => {
        if (category === "All") {
            let allCourses = [];
            Object.values(courses).forEach((array) => {
                array.forEach((courseData) => {
                    allCourses.push(courseData);
                });
            });
            return allCourses;
        } else {
            return courses[category];
        }
    };

    // this getCourses function is used to put all the data in to the array of all courses so that we can
    // have all the data at once instead of having it in categories like in the given data file. to do this
    // we use for each loop to push data and also traverse on each array one by one like first we go through the
    // above categories like courseCategory then we travse each Element and push it in to the array.
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {getCourses().map((course) => {
                return (
                    <Card
                        key={course.id}
                        course={course}
                        likedCourses={likedCourses}
                        setLikedCourses={setLikedCourses}
                    />
                );
            })}
        </div>
    );
};
export default Cards;
