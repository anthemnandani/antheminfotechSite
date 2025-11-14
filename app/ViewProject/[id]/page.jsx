"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Breadcrumb from "../../../container/Breadcrumb/Breadcrumb";
import WorkDetailsContainer from "../../../container/Work/WorkDetailsContainer";
import WorkData from "../../../data/work/workDetails.json";
import axios from "axios";
import { getProjectByID } from "../../../services/projectsservices.js";
import { getToken } from "../../../services/tokenservice.js";

const WorkDetails = () => {
  let { id } = useParams();
  const projectid = parseInt(id);
  const data = WorkData.filter((work) => work.id === projectid);

  //new implementation
  const [token, setToken] = useState(null);
  const [projects, setProject] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const data = await getToken();
        setToken(data.token);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchToken();
  }, []);

  useEffect(() => {
    const fetchProject = async () => {
      if (token && projectid) {
        try {
          const projectDetails = await getProjectByID(projectid);
          setProject(projectDetails);
          setLoading(false);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchProject();
  }, [token, projectid]);

  return (
    <React.Fragment>
    
   
      <Breadcrumb
        image="images/bg/breadcrumb-bg-two.jpg"
        title={projects.data?.projectName}
        content="Home"
        contentTwo="OurWork"
        contentThree="View Project"
      />
      <WorkDetailsContainer
        projects={projects}
        loading={loading}
        classOption="bg-white"
      />
     
    </React.Fragment>
  );
};

export default WorkDetails;









// "use client";
// import React, { useEffect, useState } from "react";
// import Breadcrumb from "../../../container/Breadcrumb/Breadcrumb";
// import WorkDetailsContainer from "../../../container/Work/WorkDetailsContainer";
// import WorkData from "../data/work/workDetails.json";
// import axios from "axios";
// import { getProjectByID } from "../services/projectsservices.js";
// import { getToken } from "../services/tokenservice.js";

// const WorkDetails = () => {
//   const projectid = parseInt(id);
//   const data = WorkData.filter((work) => work.id === projectid);

//   //new implementation
//   const [token, setToken] = useState(null);
//   const [projects, setProject] = useState({});
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchToken = async () => {
//       try {
//         const data = await getToken();
//         setToken(data.token);
//       } catch (err) {
//         console.error(err.message);
//       }
//     };

//     fetchToken();
//   }, []);

//   useEffect(() => {
//     const fetchProject = async () => {
//       if (token && projectid) {
//         try {
//           const projectDetails = await getProjectByID(projectid);
//           setProject(projectDetails);
//           setLoading(false);
//         } catch (error) {
//           console.error(error);
//         }
//       }
//     };

//     fetchProject();
//   }, [token, projectid]);

//   return (
//     <React.Fragment>
     
//       <Breadcrumb
//         image="images/bg/breadcrumb-bg-two.jpg"
//         title={projects.data?.projectName}
//         content="Home"
//         contentTwo="OurWork"
//         contentThree="View Project"
//       />
//       <WorkDetailsContainer
//         projects={projects}
//         loading={loading}
//         classOption="bg-white"
//       />
     
//     </React.Fragment>
//   );
// };

// export default WorkDetails;
