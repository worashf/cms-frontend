import React, { useMemo } from "react";
import CardMenu from "components/card/CardMenu";
import Card from "components/card";
import Checkbox from "components/checkbox";
import { Link, useParams } from "react-router-dom";

import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import { MdCheckCircle, MdCancel, MdOutlineError, MdDone } from "react-icons/md";
import { GrView } from "react-icons/gr";
import {   useGetSingleCompliantResponseQuery} from '../../../store/services'
const CompliantRequestTable = (props) => {
  const { columnsData, tableData } = props;
const {compliantId}  = useParams()
  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);
  const loginUser = localStorage.getItem('login-user');
  const loginUserObject = JSON.parse(loginUser);
  const userRole  =  loginUserObject?.user?.role


  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance;
  initialState.pageSize = 11;

  return (
    <Card extra={"w-full sm:overflow-auto p-4"}>
      <header className="relative flex items-center justify-between">
        <div className="text-xl font-bold text-navy-700 dark:text-white">
        አግባብነት ያላቸው ቅሬታዎች
        </div>

        {/* <CardMenu /> */}
     
      </header>

      <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
        <table
          {...getTableProps()}
          className="w-full"
          variant="simple"
          color="gray-500"
          mb="24px"
        >
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, index) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700"
                    key={index}
                  >
                    <div className="text-md font-bold tracking-wide text-gray-800 lg:text-md">
                      {column.render("Header")}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={index}>
                  {row.cells.map((cell, index) => {
                    let data = "";
                    if (cell.column.Header == "የቅሬታ እርስ") {
                      data = (
                        <div className="w-full flex items-center gap-2">
                          <Checkbox />
                          <p className="text-md font-bold text-navy-800 dark:text-white">
                            {cell.value}
                          </p>
                        </div>
                      );
                    } else if (cell.column.Header == "የቅሬታ አይነት") {
                      data = (
                        <div className="flex items-center">
                          <p className="text-sm font-bold text-navy-700 dark:text-white">
                            {cell.value}
                          </p>
                        </div>
                      );
                    } else if (cell.column.Header == "የተጠየበት ቀን") {
                      data = (
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {" "}
                          {cell.value}{" "}
                        </p>
                      );
                    } else if (cell.column.Header == "ሁኔታ") {
                     
                        data = (
                          <div className="flex items-center gap-2">
                            <div className={`rounded-full text-xl`}>
                            {cell.value == "አግባብነት ያለው" ? (
                              <MdDone className="text-green-500" />
                            ) : cell.value == "አግባብነት የሌለው" ? (
                              <MdCancel className="text-red-500" />
                            ) : cell.value == "አዲስ" ? (
                              <MdOutlineError className="text-navy-500" />
                            ) : null}
                            </div>
                            <p className="text-sm font-bold text-navy-700 dark:text-white">
                              {cell.value}
                            </p>
                          </div>
                        );
                      
                    }
                    else if (cell.column.Header == "ድርጊቶች") {
                     
                      data = (
                        <div className="flex items-center gap-1">
                          <div className={`rounded-full text-xl`}>
                          {cell.value == "አግባብነት ያለው" ? (
                              <GrView className="text-green-500" />
                            ) : cell.value == "አግባብነት የሌለው" ? (
                              <MdCancel className="text-red-500" />
                            ) : cell.value == "አዲስ" ? (
                              <MdOutlineError className="text-navy-500" />
                            ) : null}
                          </div>
                          <p className="text-sm font-bold text-navy-700 dark:text-white">
                          <Link to={`/admin/compliant-detail/${cell.value}`} className="text-md md:text-lg text-navy bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded">
                          አሳይ
          </Link>
                          </p>
                  
                        </div>
                      );
                    
                  }
                    return (
                      <td
                        {...cell.getCellProps()}
                        key={index}
                        className="pt-[14px] pb-[16px] sm:text-[14px]"
                      >
                        {data}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default CompliantRequestTable;
