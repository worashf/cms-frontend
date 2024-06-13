import React, { useEffect, useState } from 'react';
import { userColumnsData } from '../../variables/columnsData';
import UserTable from '../users/UserTable';
import { useGetUsersQuery } from 'store/services';

const UserPage = () => {
  const { data, error, isLoading, isSuccess } = useGetUsersQuery({});
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    if (isSuccess) {
      const users = data?.data?.map(user => ({
        firstName: user?.employee?.firstName,
        lastName: user?.employee?.lastName,
        email: user?.email,
        role: user?.role,
        status: user?.status ? "Enabled" : "Disabled",
      }));
      setUserData(users);
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
        <p>An error occurred while fetching user data: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-1">
      <UserTable columnsData={userColumnsData} tableData={userData} />
    </div>
  );
};

export default UserPage;
