import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const RiskTable = ({ data }) => {
  const columns = [
    { field: "id", headerName: "Animal ID", width: 100 },
    { field: "owner", headerName: "Owner", width: 200 },
    { field: "latitude", headerName: "latitude", width: 200 },
    { field: "longitude", headerName: "longitude", width: 200 },
    { field: "risk", headerName: "Level of risk", width: 130 },
  ];
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10, 20, 50]}
      />
    </div>
  );
};

export default RiskTable;
