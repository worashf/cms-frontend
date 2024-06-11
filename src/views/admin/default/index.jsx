
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import PieChartCard from "views/admin/default/components/PieChartCard";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";


import Widget from "components/widget/Widget";

const Dashboard = () => {
  return (
    <div>
      {/* Card widget */}

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-6">
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"ጠቅላላ የቀረቡ ጥያቄዎች"}
          subtitle={"100"}
        />
 
        <Widget
          icon={<IoDocuments className="h-6 w-6" />}
          title={"አዲስ የቅሬታ ጥያቄዎች"}
          subtitle={"98"}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"አግባብነት ያላቸው"}
          subtitle={"34"}
        />
        <Widget
          icon={<MdDashboard className="h-6 w-6" />}
          title={"አግባብነት የሌላቸው"}
          subtitle={"20"}
        />
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
