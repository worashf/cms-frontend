import { complainColumnsData } from "../variables/columnsData";
import ValidComplianceTable from "./components/ValidComplianceTable";
import { useGetEmployeeCompliantRequestsQuery, useGetAllValidCompliantsQuery } from "store/services";

const ValidCompliance = () => {
  const loginUser = localStorage.getItem('login-user');
  const loginUserObject = JSON.parse(loginUser);
  const employeeId = loginUserObject?.user?.role === "COMPLIANT" ? loginUserObject?.user?.employee?._id : null;
  console.log(employeeId, "employee", loginUserObject.user);
  
  // Always call the hook
  const { data, error, isLoading } = useGetAllValidCompliantsQuery({ });
  let compliantRequestData = [];
  if (data?.data) {
    compliantRequestData = data.data.map(compliant => ({
      compliantTitle: compliant?.compliantTitle,
      compliantCategory: compliant?.compliantCategory,
      compliantEventDate:   new Date(compliant?.compliantEventDate).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit'
      }),
      status: compliant?.status,
      action: compliant._id
    }));
  }

  if (error) {
    console.error("An error occurred while fetching compliant requests:", error);
  }


  return (
    <div>
      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-1">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ValidComplianceTable
            columnsData={complainColumnsData}
            tableData={compliantRequestData}
          />
        )}
      </div>
    </div>
  );
};

export default ValidCompliance;
