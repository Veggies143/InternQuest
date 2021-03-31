import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ApplicationForm from './Components/ApplicationForm/ApplicationForm';
import DispalyApplicationDetails from './Components/DispalyApplicationDetails/DispalyApplicationDetails';
import InternshipDetailsForm from './Components/InternshipDetailsForm/InternshipDetailsForm';
import LoginPage from './Components/LoginPage/LoginPage';
import EmployeeRegistration from './Components/EmployeeRegistration/EmployeeRegistration';
import EmployerRegistration from './Components/EmployerRegistration/EmployerRegistration';
import TutorRegistration from './Components/TutorRegistration/TutorRegistration';
import DisplayInternshipDetails from './Components/DisplayInternshipDetails/DisplayInternshipDetails';
import TutorProfile from './Components/TutorProfile/TutorProfile';
import EmployerProfile from './Components/EmployerProfile/EmployerProfile';
import EmployeeProfile from './Components/EmployeeProfile/EmployeeProfile';
import CourseDetailsForm from './Components/CourseDetailsForm/CourseDetailsForm';
import DisplayCourseDetails from './Components/DisplayCourseDetails/DisplayCourseDetails';

function App() {
  return (
    <div>
      <DisplayCourseDetails/>
    </div>
  );
}

export default App;
