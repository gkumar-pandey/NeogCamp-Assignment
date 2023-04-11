import React, { useEffect, useState } from "react";
import fakeFetch from "../../Apis/projectapi";
import ProjectComp from "./Component/ProjectComp";
import ProjectDetails from "./Component/ProjectDetails";

const Q7 = () => {
  const [projectsData, setProjectData] = useState([]);
  const [projectDetail, setProjectDetail] = useState(null);

  const fetchData = async () => {
    const url = "https://example.com/api/projects";
    try {
      const { status, data } = await fakeFetch(url);
      if (status === 200) {
        setProjectData(data.projects);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const showProjectDetails = (item) => {
    setProjectDetail({ ...item });
  };
  return (
    <div>
      <div>
        <h2>Projects</h2>
        <div>
          {projectsData.map((project) => (
            <ProjectComp {...project} showProjectDetails={showProjectDetails} />
          ))}
        </div>
      </div>
      <div>
        <h2>Project Details</h2>
        <div>{projectDetail && <ProjectDetails {...projectDetail} />}</div>
      </div>
    </div>
  );
};

export default Q7;
