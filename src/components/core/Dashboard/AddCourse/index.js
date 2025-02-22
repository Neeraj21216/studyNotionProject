
import RenderSteps from "./RenderSteps";
const  AddCourse=()=>{
    return (
        <div className="text-white flex justify-between mt-5">
            <div>
                <h2>
                    Add to Couse
                </h2>
            </div>
            <div>
                <RenderSteps />
            </div>
            <div>
                <ul>
                    <li>Set the Course Price option or make it free.</li>
                    <li>Video section controls the course overview video.</li>
                    <li>Video section controls the course overview video.</li>
                    <li>Course Builder is where you create & organize a course.</li>
                    <li>Add Topics in the Course Builder section to create lessons, quizzes, and assignments.</li>
                    <li>Information from the Additional Data section shows up on the course single page.</li>
                    <li>Make Announcements to notify any important</li>
                    <li>Notes to all enrolled students at once.</li>

                </ul>
            </div>
        </div>
    );
}
export default AddCourse;
