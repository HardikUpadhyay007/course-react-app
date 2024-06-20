import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { apiUrl, filterData } from "./data";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
const App = () => {
    const [courses, setCourses] = useState(null);
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState(filterData[0].title);
    async function fetchData() {
        setLoading(true);
        try {
            let response = await fetch(apiUrl);
            let output = await response.json();
            setCourses(output.data);
        } catch (error) {
            // toast.error("Network error");
            console.log("Network error");
        }
        setLoading(false);
    }
    useEffect(() => {
        fetchData();
    }, []);
    // const [courses, setCourses] = useState(null);
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const res = await fetch(apiUrl);
    //             const output = await res.json();
    //             setCourses(output.data);
    //         } catch (error) {
    //             // toast.error("Something went wrong");
    //         }
    //     };
    //     fetchData();
    // }, []);
    // we first used useEffect hook to get the data from the api then we make a async function called fetchData to
    // fetch the data from the api and then we fetch the data and store it in a variable res and then convert the data
    // in output variable into json and finally give that daata to setCourses.
    return (
        <div className="min-h-screen flex flex-col bg-gray-800">
            <Navbar></Navbar>
            <div className="bg-gray-800">
                <Filter
                    category={category}
                    setCategory={setCategory}
                    filterData={filterData}
                ></Filter>
                {/* we got filter data to parse in this using props  */}
                <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh]">
                    {loading ? (
                        <Spinner></Spinner>
                    ) : (
                        <Cards courses={courses} category={category}></Cards>
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;
