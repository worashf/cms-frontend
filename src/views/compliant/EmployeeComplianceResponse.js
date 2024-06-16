import { employeeComplainResponseColumnsData } from "../variables/columnsData";
import  EmployeeCompliantResponseTable from "./components/EmployeeCompliantResponseTable";
import { useGetEmployeeCompliantResponsesQuery } from "store/services";

const EmployeeComplianceResponse = () => {
  const loginUser = localStorage.getItem('login-user');
  const loginUserObject = JSON.parse(loginUser);
  const employeeId = loginUserObject?.user?.role === "COMPLIANT" ? loginUserObject?.user?.employee?._id : null;
  console.log(employeeId, "employee", loginUserObject.user);
  
  // Always call the hook
  const { data, error, isLoading } = useGetEmployeeCompliantResponsesQuery({ employeeId });
console.log(data, "response 00")
    let compliantResponsesData = [];

  if (data?.data) {
    compliantResponsesData = data.data.map(compliantReponse => ({
      compliantTitle: compliantReponse?.compliance?.compliantTitle,
      compliantCategory: compliantReponse?.compliance?.compliantCategory,

      status: compliantReponse?.compliance?.status,
      action: compliantReponse?.compliance._id
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
          <EmployeeCompliantResponseTable
            columnsData={employeeComplainResponseColumnsData}
            tableData={compliantResponsesData}
          />
        )}
      </div>
    </div>
  );
};

export default EmployeeComplianceResponse;
