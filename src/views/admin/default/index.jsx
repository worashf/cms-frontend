
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import PieChartCard from "views/admin/default/components/PieChartCard";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";

import { Link } from "react-router-dom";
import Widget from "components/widget/Widget";

import {useGetAllInValidCompliantsQuery, useGetAllValidCompliantsQuery, useGetEmployeeCompliantRequestsQuery} from "../../../store/services"

const Dashboard = () => {
  const { data:invalidCompiances, error:invalidError, isLoading: inValidLoading } = useGetAllInValidCompliantsQuery();
  const { data:validCompiances, error: validError, isLoading } = useGetAllValidCompliantsQuery();
  const { data:allCompiances, error: allError, allIsLoading } = useGetEmployeeCompliantRequestsQuery({});
  const validCompianceLength  =  validCompiances?.data?.length;
  const invalidCompianceLength  =  invalidCompiances?.data?.length
  const allCompianceLength  =  allCompiances?.data?.length;

  return (
    <div>
      {/* Card widget */}

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-6">
      <Link to="/admin/compliants">
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"ጠቅላላ የቀረቡ ጥያቄዎች"}
          subtitle={allCompianceLength}
        />
        </Link>
 
        <Widget
          icon={<IoDocuments className="h-6 w-6" />}
          title={"አዲስ የቅሬታ ጥያቄዎች"}
          subtitle={"98"}
        />
        <Link to="/admin/valid-compliants" className="hover:bg-gray-200 rounded-lg">
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"አግባብነት ያላቸው"}
          subtitle={validCompianceLength}
        />
        </Link>
       <Link to="/admin/invalid-compliants">
          <Widget
            icon={<MdDashboard className="h-6 w-6" />}
            title={"አግባብነት የሌላቸው"}
            subtitle={invalidCompianceLength}
          />
        </Link>
      </div>

      {/* Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
      <PieChartCard />
      <WeeklyRevenue />
      </div>

    

    </div>
  );
};

export default Dashboard;
