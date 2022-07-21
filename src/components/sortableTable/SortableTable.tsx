import React from 'react';
import { useTable, Column, useSortBy } from 'react-table';
import { DataButton } from '../../types/data-button-type';
import "./sortabletable.scss"
import { PropertyData } from '../../types/property-type';

const SortableTable = ({
  columns,
  data,
}: {
  columns: Column<PropertyData>[];
  data: PropertyData[];
}) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<PropertyData>({ columns, data }, useSortBy);
  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => {
            const { key, ...restHeaderGroupProps } =
              headerGroup.getHeaderGroupProps();
            return (
              <tr {...restHeaderGroupProps} key={key}>
                {headerGroup.headers.map((column) => {
                  const { key, ...restColumn } = column.getHeaderProps(
                    column.getSortByToggleProps()
                  );
                  return (
                    <th {...restColumn} key={key}>
                      <>
                        {column.render('Header')}
                        <span>
                          {' '}
                          {column.isSorted
                            ? column.isSortedDesc
                              ? ' 🔽'
                              : ' 🔼'
                            : ''}{' '}
                        </span>
                      </>
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            const { key, ...restRowProps } = row.getRowProps();
            return (
              <tr {...restRowProps} key={key}>
                {row.cells.map((cell) => {
                  const { key, ...restCellProps } = cell.getCellProps();
                  const id = cell.column.id
                  if (id === "link") {
                    return (
                        <td {...restCellProps} key={key}>
                          <a href={cell.value}>
                            {cell.render('Cell')}
                          </a>
                        </td>
                    )
                  }
                  else if (id === "land_area_tsubo" || id === "building_area_tsubo"){
                    return (
                      <td {...restCellProps} key={key}>
                        {/* {Number(cell.render('Cell'))?.toFixed(2)} */}
                        {Number(cell.value).toFixed(1)}
                      </td>
                    )

                  }
                  else if (id === "land_area" || id === "building_area" || id === "balcony"){
                    return (
                      <td {...restCellProps} key={key}>
                        {/* {Number(cell.render('Cell'))?.toFixed(2)} */}
                        {Number(cell.value).toFixed(1)}
                      </td>
                    )

                  }
                  else if (id === "tsubo_tanka" || id === "price"){
                    return (
                      <td {...restCellProps} key={key}>
                        {/* {Number(cell.render('Cell'))?.toFixed(2)} */}
                        {parseInt(cell.value).toLocaleString()}
                      </td>
                    )
                  }
                  else {
                    return (
                      <td {...restCellProps} key={key}>
                        {cell.render('Cell')}
                      </td>
                    );

                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default SortableTable;