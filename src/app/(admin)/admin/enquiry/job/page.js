"use client";

import api from "@/_config/config";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { DataTable } from "simple-datatables";

export default function page() {

  const [data, setData] = useState();

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    try {
      const res = await api.get(`/jobs/get_job_enquiry_data`);
      if (res.data.status === 1) {
        setData(res.data.data)
      }
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }


  useEffect(() => {
    if (data) {
      new DataTable("#myTable");
    }
  }, [data]);


  return (
    <>
      <div className="app-main__inner">

        <div className="row">
          <div className="col-md-12 col-xl-12">
            <div className="main-card mb-3 card">
              <div className="card-header">
                View Job Enquiries

              </div>
              <div className="table-responsive">
                <table
                  id="myTable"
                  className="align-middle mb-0 table table-borderless table-striped table-hover"
                >
                  <thead>
                    <tr>
                      <th className="text-center">sr. no.</th>
                      <th className="">Name & Email</th>
                      <th className="">Apply Date</th>
                      <th className="">Subject</th>
                      <th className="">About</th>
                      <th className="">Resume</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      data?.map((ele, ind) => (
                        <tr>
                          <td className="text-center text-muted">#{ind + 1}</td>
                          <td>
                            <div className="widget-heading">
                              {ele.name}
                              <br />
                              {ele.email}
                            </div>

                          </td>
                          <td>
                            <div className="widget-heading">
                              {ele.createdAt?.split("T")[0]}
                            </div>
                          </td>
                          <td>
                            <div className="widget-heading" style={{ maxWidth: "250px", maxHeight: "50px", overflowY: "scroll" }}>
                              {ele.subject}
                            </div>
                          </td>
                          <td>
                            <div className="widget-heading" style={{ maxWidth: "250px", maxHeight: "50px", overflowY: "scroll" }}>
                              {ele.about}
                            </div>
                          </td>
                          <td>
                            <div className="widget-heading d-flex justify-content-center">
                              <a href={`http://localhost:5000/uploads/${ele.resume}`} download={`${ele.name}_resume.pdf`} target="_blank"><i class="fas fa-solid fa-download"></i></a>
                            </div>
                          </td>

                        </tr>
                      ))
                    }

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}