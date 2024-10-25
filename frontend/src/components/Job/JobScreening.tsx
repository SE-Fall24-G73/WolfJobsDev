/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useApplicationStore } from "../../store/ApplicationStore";
import { Button } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";
import { useSearchParams } from "react-router-dom";
import { acceptanceEmailURL, API_ROOT } from "../../api/constants";

const JobScreening = (props: any) => {
  const { jobData }: { jobData: Job } = props;
  const [searchParams] = useSearchParams();

  const [displayList, setDisplayList] = useState<Application[]>([]);

  const applicationList = useApplicationStore((state) => state.applicationList);

  console.log(applicationList);

  console.log(jobData);

  useEffect(() => {
    // let displayList: Application[] = [];s
    setDisplayList(
      applicationList.filter(
        (item) => item.jobid === jobData._id && item.status === "applied"
      )
    );
  }, [searchParams]);

  const handleAccept = async (applicationId: string) => {
    const modifyApplicationUrl = `${API_ROOT}/users/modifyApplication`;

    const body = {
      applicationId: applicationId,
      status: "screening",
    };

    try {
      // First POST request to modify the application
      const res = await axios.post(modifyApplicationUrl, body);

      if (res.status === 200) {
        toast.success("Accepted candidate");

        const applicationData = applicationList.find(
          (item) => item._id === applicationId
        );

        if (!applicationData) {
          toast.error("Application data not found");
          return;
        }

        const emailBody = {
          applicationId: applicationId,
          jobid: jobData._id,
          emailType: "acceptance",
          applicantEmail: applicationData.applicantemail,
          applicantName: applicationData.applicantname,
          jobTitle: jobData.name,
          companyName: jobData.managerAffilication,
          contactEmail: "contact@ncsu.edu",
        };

        console.log(emailBody);

        // Second POST request to send the acceptance email
        const emailRes = await axios.post(acceptanceEmailURL, emailBody);

        if (emailRes.status === 200) {
          toast.success("Acceptance email sent");
        } else {
          toast.error("Failed to send acceptance email");
        }
      } else {
        toast.error("Failed to accept candidate");
      }
    } catch (error) {
      // Combined error handling
      const err = error as any;
      if (err.response) {
        console.error("Error Status:", err.response.status);
        console.error("Error Data:", err.response.data);
      } else if (err.request) {
        console.error("No response received:", err.request);
      } else {
        console.error("Error setting up request:", err.message);
      }
      toast.error("An error occurred while processing the request");
    }
  };

  const handleReject = (applicationId: string) => {
    const url = `${API_ROOT}/users/modifyApplication`;

    const body = {
      applicationId: applicationId,
      status: "rejected",
    };

    axios.post(url, body).then((res) => {
      if (res.status == 200) {
        toast.success("Rejected candidate");
        location.reload();

        return;
      }
      toast.error("Failed to reject candidate");
    });
  };

  return (
    <>
      <div className="text-xl">Screening</div>
      {displayList.length === 0 && (
        <div className="text-base text-gray-500">List empty</div>
      )}
      {displayList?.map((item: Application) => (
        <div className="p-1 ">
          <div className="p-2 mx-1 my-2 bg-white rounded-lg">
            <div className="flex flex-row justify-between ">
              <div className="flex flex-col">
                <div> Name: {item.applicantname} </div>
                {!!item?.phonenumber && <div>Phone: {item.phonenumber} </div>}
                <div>Email: {item.applicantemail}</div>
                {!!item?.applicantSkills && (
                  <div>Skills: {item.applicantSkills}</div>
                )}
                <div className="flex justify-center px-2 py-1 ml-2 border border-gray-300 rounded-md">
                  <a
                    href={`/resumeviewer/${item.applicantid}`}
                    className="text-red-500"
                  >
                    View Resume
                  </a>
                </div>
              </div>
              <div className="flex flex-row">
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    return handleAccept(item._id);
                  }}
                  style={{ color: "#FF5353" }}
                >
                  Accept
                </Button>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    return handleReject(item._id);
                  }}
                  style={{ color: "#FF5353" }}
                >
                  Reject
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default JobScreening;
