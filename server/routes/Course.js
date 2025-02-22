const express=require("express");
const router=express.Router();

//import all controllers 
const {createCourse,showAllCourses,showCourseDetail,editCourseDetails,getInstructorCourses,deleteCourses,
    getEnrolledCourses
}=require("../controller/Course");
//how can i make this 
const {auth,isAdmin,isInstructor,isStudent}=require("../middleware/auth");
//category
const {createCategory,showAllCategory,categoryPageDetails} = require('../controller/Category');


//******************************************************************************************************* */
//                      Routes for Course                    
//****************************************************************************************************** */
 router.post("/createCourse",auth,isInstructor,createCourse);
router.get("/showAllCourses",showAllCourses);
router.post("/showCourseDetail",showCourseDetail);
router.put("/editCourseDetails",auth,isInstructor,editCourseDetails);
router.get("/getInstructorCourses",auth,isInstructor,getInstructorCourses);
router.post("/deleteCourses",auth,isInstructor,deleteCourses);
router.get("/getEnrolledCourses",auth,isStudent,getEnrolledCourses);

 



   
//******************************************************************************************************* */
//                      Routes for Categories                    
//****************************************************************************************************** */
router.post("/createCategory",auth,isAdmin,createCategory);
router.get("/showAllCategory",showAllCategory);
router.post("/getCategoryPageDetails",categoryPageDetails);




//******************************************************************************************************* */
//                      Routes for Section                   
//****************************************************************************************************** */
const {
    createSection,
    updateSection, 
    deleteSection,
} = require('../controller/Section');

router.post("/createSection",auth,isInstructor,createSection);

router.put("/updateSection",auth,isInstructor,updateSection);
router.delete("/deleteSection",auth,isInstructor,deleteSection);

//******************************************************************************************************* */
//                      Routes for SubSection                   
//******************************************************************************************************* */
const {createSubSection,deleteSubSection,updateSubSection}=require("../controller/SubSection")
router.post("/createSubSection",auth,isInstructor,createSubSection);
router.delete("/deleteSubSection",auth,isInstructor,deleteSubSection);
router.put("/updateSubSection",auth,isInstructor,updateSubSection);




module.exports=router;

