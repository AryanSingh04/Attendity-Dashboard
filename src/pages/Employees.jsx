import React, { useMemo } from 'react';
import { useReactTable, createColumnHelper, getCoreRowModel, getSortedRowModel } from '@tanstack/react-table';
import { Link } from 'react-router-dom';
import { RiExternalLinkFill } from "react-icons/ri";
import { GrAscend } from "react-icons/gr";
import { GrDescend } from "react-icons/gr";
// Define column helper
const columnHelper = createColumnHelper();

const Employees = () => {

  const data = useMemo(()=> [
    { id: 16665465, name: "Alice Johnson", email: "alice.johnson@example.com", workH: 8.5, absent: 2 },
    { id: 264656, name: "Bob Smith", email: "bob.smith@example.com", workH: 7.8, absent: 4 },
    { id: 364554, name: "Carol Davis", email: "carol.davis@example.com", workH: 9.0, absent: 1 },
    { id: 45465, name: "David Brown", email: "david.brown@example.com", workH: 8.2, absent: 3 },
    { id: 5659, name: "Emily Wilson", email: "emily.wilson@example.com", workH: 8.7, absent: 0 },
    { id: 66488, name: "Frank Miller", email: "frank.miller@example.com", workH: 7.5, absent: 5 },
    { id: 7312321, name: "Grace Lee", email: "grace.lee@example.com", workH: 8.4, absent: 2 },
    { id: 825898, name: "Hannah Martinez", email: "hannah.martinez@example.com", workH: 9.1, absent: 1 },
    { id: 958546, name: "Isaac Taylor", email: "isaac.taylor@example.com", workH: 8.3, absent: 3 },
    { id: 1452780, name: "Jack Wilson", email: "jack.wilson@example.com", workH: 8.6, absent: 0 },
    { id: 16665465, name: "Alice Johnson", email: "alice.johnson@example.com", workH: 8.5, absent: 2 },
    { id: 264656, name: "Bob Smith", email: "bob.smith@example.com", workH: 7.8, absent: 4 },
    { id: 364554, name: "Carol Davis", email: "carol.davis@example.com", workH: 9.0, absent: 1 },
    { id: 45465, name: "David Brown", email: "david.brown@example.com", workH: 8.2, absent: 3 },
    { id: 5659, name: "Emily Wilson", email: "emily.wilson@example.com", workH: 8.7, absent: 0 },
    { id: 66488, name: "Frank Miller", email: "frank.miller@example.com", workH: 7.5, absent: 5 },
    { id: 7312321, name: "Grace Lee", email: "grace.lee@example.com", workH: 8.4, absent: 2 },
    { id: 825898, name: "Hannah Martinez", email: "hannah.martinez@example.com", workH: 9.1, absent: 1 },
    { id: 958546, name: "Isaac Taylor", email: "isaac.taylor@example.com", workH: 8.3, absent: 3 },
    { id: 1452780, name: "Jack Wilson", email: "jack.wilson@example.com", workH: 8.6, absent: 0 },
  ],[])

  const columns = [
    columnHelper.accessor('id', {
      header: () => 'Id',
      enableSorting: false,
    }),
    columnHelper.accessor('name', {
      header: () => 'Name',
      enableSorting: false,
    }),
    columnHelper.accessor('email', {
      header: () => 'Email',
      enableSorting: false,
    }),
    columnHelper.accessor('workH', {
      header: () => 'Work Hours',
      enableSorting: true,
    }),
    columnHelper.accessor('absent', {
      header: () => 'Absent Days',
      enableSorting: true,
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true, // Optional: for debugging
  });

  return (
    <div className='w-full h-full '>
      <h1 className='text-2xl font-semibold mb-4'>Monthly Attendance</h1>
      <div className='h-full overflow-y-scroll scroll-smooth'>
      <table className='w-full h-full bg-comp-light-bg dark:bg-comp-dark-bg overflow-y-auto'>
        <thead className='rounded-xl overflow-hidden  bg-comp-light-bg dark:bg-comp-dark-bg'>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th 
                  key={header.id} 
                  className='border p-2 resize-x cursor-pointer '
                  onClick={header.column.getToggleSortingHandler()}
                >
                 <span className='flex items-center justify-center'> {header.column.columnDef.header()}
                 <span className='inline-block ml-4 '>
                    {header.column.getIsSorted() ? (
                      header.column.getIsSorted() === 'desc' ?  <GrDescend /> :  <GrAscend />
                    ) : ''}
                  </span>
                 </span>
                 
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className='overflow-y-scroll  h-full '>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td 
                  key={cell.id} 
                  className={`border p-2 ${cell.column.id === 'id' ? 'hover:bg-blue-300' : ''}`}
                >
                  {cell.column.id=="id" ? <Link to={`/employee/${cell.getValue()}`} className='flex gap-1 items-center'>
  {cell.getValue()} <RiExternalLinkFill />
</Link>: cell.getValue()}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Employees;
