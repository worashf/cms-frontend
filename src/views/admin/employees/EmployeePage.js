import React, { useEffect, useState } from 'react';
import { employeeColumnsData } from '../../variables/columnsData';
import EmployeeTable from '../employees/EmployeeTable';
import { useGetEmployeesQuery } from 'store/services';

const EmployeePage = () => {
  const { data, error, isLoading, isSuccess } = useGetEmployeesQuery({});
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    if (isSuccess && data?.employees) {
      const employees = data.employees.map(employee => ({
        firstName: employee?.firstName,
        middleName: employee?.middleName,
        phoneNumber: employee?.phoneNumber,
        institution: employee?.institution?.institutionName,
      }));
      setEmployeeData(employees);
    }
  }, [data, isSuccess]);

  if (isLoading) {
    return (
      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-1">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-1">
        <p>An error occurred while fetching employee data: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-1">
      <EmployeeTable columnsData={employeeColumnsData} tableData={employeeData} />
    </div>
  );
};

export default EmployeePage;
