import React, { useEffect, useState } from 'react';
import { institutionColumnsData } from '../../variables/columnsData';
import InstitutionTable from '../institutions/InstitutionTable';
import { useGetInstitutionsQuery} from 'store/services';

const InstitutionPage = () => {
  const { data, error, isLoading, isSuccess} = useGetInstitutionsQuery({});
  const [institutionsData , setInstitutionsData] = useState([])


  useEffect(() => {
    if (isSuccess && data?.data) {
      const institutions = data?.data?.map(institute => ({
        institutionName: institute?.institutionName,
         institutionCategory :  institute?.institutionCategory
      }));
     setInstitutionsData(institutions)
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
      <InstitutionTable columnsData={institutionColumnsData} tableData={institutionsData} />
    </div>
  );
};

export default InstitutionPage;
