"use client";

import api from "@/_config/config";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { DataTable } from "simple-datatables";
import Swal from "sweetalert2";

export default function page() {

  const [solutionData, setSolutionData] = useState();
  const [caseStudyData, setCaseStudyData] = useState();

  useEffect(() => {
    getSolutionList();
    getCaseStudyData();
  }, [])

  const getSolutionList = async () => {
    try {
      const res = await api.get(`/solution/get_solution_list`);
      if (res.data.status === 1) {
        setSolutionData(res.data.data)
      }
    } catch (err) {
      console.log(err);
    }
  }

  const getSolutionNameById = (id) => {
    const solution = solutionData?.find((ele) => ele._id == id);
    return solution?.solution_name;
  }

  const getCaseStudyData = async () => {
    try {
      const res = await api.get(`/case_study/get_all_case_study`);
      if (res.data.status == 1) {
        setCaseStudyData(res.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (caseStudyData) {
      new DataTable("#myTable");
    }
  }, [caseStudyData]);


  const handleDelete = async (id) => {

    const result = await Swal.fire({
      icon: "warning",
      width: "400px",
      title: "Are you sure?",
      allowOutsideClick: false,
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: "Delete",
      customClass: {
        confirmButton: "btn btn-primary",
        cancelButton: "btn btn-outline-secondary",
      }
    })

    if (result.isConfirmed) {
      try {

        const res = await api.post(`/case_study/delete_case_study`, {
          id: id
        })
        console.log(res.data);
        if (res.data.status == 1) {
          toast.success(res.data.message);
          getCaseStudyData();
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  const handleChangeStatus = async (id, status) => {
    const result = await Swal.fire({
      icon: "warning",
      width: "400px",
      title: "Are you sure?",
      allowOutsideClick: false,
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: `${status == 1 ? "Deactivate" : "Activate"}`,
      customClass: {
        confirmButton: "btn btn-primary",
        cancelButton: "btn btn-outline-secondary",
      }
    })
    if (result.isConfirmed) {
      try {
        const res = await api.post(`/case_study/change_status`, {
          id: id,
          status: status
        })
        console.log(res.data);
        if (res.data.status === 1) {
          getCaseStudyData();
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <>
      <div className="app-main__inner">

        <div className="row">
          <div className="col-md-12 col-xl-12">
            <div className="main-card mb-3 card">
              <div className="card-header">
                View Case Study

              </div>
              <div className="table-responsive">
                <table
                  id="myTable"
                  className="align-middle mb-0 table table-borderless table-striped table-hover"
                >
                  <thead>
                    <tr>
                      <th className="text-center">sr. no.</th>
                      <th className="text-center">Solution name</th>
                      <th className="text-center">Case Study heading</th>
                      <th className="text-center">Status</th>
                      <th className="text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      caseStudyData?.map((ele, ind) => (
                        <tr>
                          <td className="text-center text-muted">#{ind + 1}</td>
                          <td>
                            <div className="widget-heading text-center">
                                {getSolutionNameById(ele.solution_id)}
                            </div>
                          </td>
                          <td>
                            <div className="widget-heading text-center">
                              {ele.heading}
                            </div>
                          </td>
                          <td className="text-center">
                            {
                              ele.status == 1 ? <div className="badge badge-warning" style={{ cursor: "pointer" }} onClick={() => handleChangeStatus(ele._id, ele.status)}>Active</div> : <div className="badge badge-secondary" style={{ cursor: "pointer" }} onClick={() => handleChangeStatus(ele._id, ele.status)}>Inactive</div>
                            }

                          </td>
                          <td className="text-center">
                            <Link href={{
                              pathname: "/admin/case-study/edit",
                              query: { id: ele._id }
                            }} className="btn btn-primary btn-sm mr-2">Edit</Link>
                            <Link href="#" className="btn btn-danger btn-sm  mr-2" onClick={() => handleDelete(ele._id)}>Delete</Link>

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
