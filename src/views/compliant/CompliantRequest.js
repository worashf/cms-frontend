import { complainColumnsData } from "./variables/columnsData";
import CompliantRequestTable from "../compliant/components/NewCompliantRequest";
import { useGetEmployeeCompliantRequestsQuery } from "store/services";

const EmployeeCompliantRequest = () => {
  const loginUser = localStorage.getItem('login-user');
  const loginUserObject = JSON.parse(loginUser);
  const employeeId = loginUserObject?.user?.employee?._id;

  // Always call the hook
  const { data, error, isLoading } = useGetEmployeeCompliantRequestsQuery({ employeeId });

  let compliantRequestData = [];

  if (data?.data) {
    compliantRequestData = data.data.map(compliant => ({
      compliantTitle: compliant?.compliantTitle,
      compliantCategory: compliant?.compliantCategory,
      compliantEventDate: compliant?.compliantEventDate,
      status: compliant?.status
    }));
  }

  if (error) {
    console.error("An error occurred while fetching compliant requests:", error);
  }
  console.log(compliantRequestData, "compliant request ")

  return (
    <div>
      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-1">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <CompliantRequestTable
            columnsData={complainColumnsData}
            tableData={compliantRequestData}
          />
        )}
      </div>
    </div>
  );
};

export default EmployeeCompliantRequest;
