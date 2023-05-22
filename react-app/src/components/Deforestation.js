import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const Deforestation = ({ data }) => {
  const columns = [
    { field: "id", headerName: "Animal ID", width: 100 },
    { field: "latitude", headerName: "latitude", width: 200 },
    { field: "longitude", headerName: "longitude", width: 200 },
    { field: "coverage", headerName: "Deforestation area", width: 200 },
  ];

  return (
    <div style={{ height: 400, width: "80%" }}>
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

export default Deforestation;
