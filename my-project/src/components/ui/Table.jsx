import React from 'react';
import { ChevronDown, ChevronUp, ArrowUpDown } from 'lucide-react';

const Table = ({
  columns,
  data,
  sortConfig,
  onSort,
  rowActions,
  expandableRows,
  className = ''
}) => {
  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key) {
      direction = sortConfig.direction === 'ascending' ? 'descending' : 'ascending';
    }
    onSort({ key, direction });
  };

  const getSortIcon = (key) => {
    if (!sortConfig) return <ArrowUpDown className="h-3 w-3 ml-1" />;
    if (sortConfig.key !== key) return <ArrowUpDown className="h-3 w-3 ml-1" />;
    return sortConfig.direction === 'ascending' ? 
      <ChevronUp className="h-4 w-4 ml-1" /> : 
      <ChevronDown className="h-4 w-4 ml-1" />;
  };

  return (
    <div className={`overflow-x-auto rounded-lg border border-gray-200 ${className}`}>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
                  column.sortable ? 'cursor-pointer hover:bg-gray-100' : ''
                }`}
                onClick={() => column.sortable && requestSort(column.key)}
              >
                <div className="flex items-center">
                  {column.header}
                  {column.sortable && getSortIcon(column.key)}
                </div>
              </th>
            ))}
            {rowActions && <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              <tr className="hover:bg-gray-50">
                {columns.map((column) => (
                  <td key={`${rowIndex}-${column.key}`} className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {column.cell ? column.cell(row) : row[column.key]}
                    </div>
                  </td>
                ))}
                {rowActions && (
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    {rowActions(row)}
                  </td>
                )}
              </tr>
              {expandableRows && expandableRows(row) && (
                <tr>
                  <td colSpan={columns.length + (rowActions ? 1 : 0)} className="px-6 py-4 bg-gray-50">
                    {expandableRows(row)}
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;