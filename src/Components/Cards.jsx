import React, { useState } from 'react'
import Card from "./Card";

const Cards = (props) => {
  const courses = props.courses;
  const category = props.category;

  // console.log(Object.values(courses)[0][0].title);
  // console.log(Object.values(courses));
  // console.log((courses)["Business"]);

  const [likedCourses , setLikedCourses] = useState([]);

  function getAllCourses (){
    if(category === "All"){
      let allCourse = [];

      Object.values(courses).forEach((course) => {
          course.forEach((courseData) => {
            
            allCourse.push(courseData);
            // console.log(courseData);
          });
      });
        return allCourse;
    }
    else
    {
      return courses[category];
    }
  }
  return (
    <>
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      { getAllCourses()?.map((course) => {
        return (
        <Card key={course.id} category={category} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />)
      })   }
    </div>
    
    
    </>
  )
}

export default Cards;
