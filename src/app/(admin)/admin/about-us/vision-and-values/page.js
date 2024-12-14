"use client"

import { useState, useRef } from "react";
import api from "@/_config/config";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false })
import { useForm } from "react-hook-form"


const page = () => {
    const editor1 = useRef(null);
    const editor2 = useRef(null);
    const editor3 = useRef(null);

    const [description1, setDescription1] = useState();
    const [description2, setDescription2] = useState();
    const [description3, setDescription3] = useState();

    const [image1, setImage1] = useState();
    const [image2, setImage2] = useState();
    const [image3, setImage3] = useState();


    const config = {
        height: 300,
        readonly: false
    };

    const router = useRouter();
    const { register, handleSubmit, formState: { isSubmitting } } = useForm()

    const onSubmit = async (data) => {
        try {
            const formdata = new FormData();
            formdata.append("solution_name", data.solution_name);
            formdata.append("solution_slug", data.solution_slug);
            formdata.append("heading", data.heading);
            formdata.append("description1", description1 ? description1 : "");
            formdata.append("sub_heading1", data.sub_heading1);
            formdata.append("content1", data.content1);
            formdata.append("sub_heading2", data.sub_heading2);
            formdata.append("content2", data.content2);
            formdata.append("description2", description2 ? description2 : "");
            formdata.append("image1", image1);
            formdata.append("image2", image2);
            formdata.append("image3", image3);
            formdata.append("title", data.title);
            formdata.append("keyword", data.keyword);
            formdata.append("meta_description", description3 ? description3 : "");

            const res = await api.post("/solution/create_solution", formdata);
            console.log(res.data);
            if (res.data.status == 1) {
                toast.success(res.data.message);
                router.push("/admin/solutions/view");
            } else {
                toast.error(res.data.message);
            }
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <div className="app-main__inner">
            <div className="row">
                <div className="col-md-12 col-xl-12">
                    <div className="main-card mb-3 card">
                        <div className="card-header">
                            vision & values
                        </div>

                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <fieldset class="border rounded p-3 px-4 mb-4">
                                    <legend class="float-none w-auto px-3">
                                        Section
                                    </legend>
                                    <div className="form-row">
                                        <div className="col-md-6">
                                            <div className="position-relative form-group">
                                                <label>
                                                    Subheading 1
                                                </label>
                                                <input
                                                    {...register("subheading1")}
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter the subheading"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="position-relative form-group">
                                                <label>
                                                    Content 1
                                                </label>
                                                <input
                                                    {...register("content1")}
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter the content"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="position-relative form-group">
                                                <label>
                                                    Icon 1
                                                </label>
                                                <input
                                                   
                                                    type="file"
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <img src="" alt="" />
                                        </div>

                                        <div className="col-md-6">
                                            <div className="position-relative form-group">
                                                <label>
                                                    Subheading 2
                                                </label>
                                                <input
                                                    {...register("subheading2")}
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter the subheading"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="position-relative form-group">
                                                <label>
                                                    Content 2
                                                </label>
                                                <input
                                                    {...register("content2")}
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter the content"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="position-relative form-group">
                                                <label>
                                                    Icon 2
                                                </label>
                                                <input
                                                   
                                                    type="file"
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <img src="" alt="" />
                                        </div>

                                        <div className="col-md-6">
                                            <div className="position-relative form-group">
                                                <label>
                                                    Subheading 3
                                                </label>
                                                <input
                                                    {...register("subheading1")}
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter the subheading"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="position-relative form-group">
                                                <label>
                                                    Content 3
                                                </label>
                                                <input
                                                    {...register("content1")}
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter the content"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="position-relative form-group">
                                                <label>
                                                    Icon 3
                                                </label>
                                                <input
                                                   
                                                    type="file"
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <img src="" alt="" />
                                        </div>


                                        <div className="col-md-12">
                                            <div className="position-relative form-group">
                                                <label>
                                                    Description
                                                </label>
                                                <JoditEditor
                                                    ref={editor1}
                                                    value={description1}
                                                    config={config}
                                                    tabIndex={1}
                                                    onBlur={(newContent) => setDescription1(newContent)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>

                                <fieldset class="border rounded p-3 px-4 mb-4">
                                    <legend class="float-none w-auto px-3">
                                        Section
                                    </legend>
                                    <div className="form-row">
                                        <div className="col-md-6">
                                            <div className="position-relative form-group">
                                                <label>
                                                    Heading
                                                </label>
                                                <input
                                                    {...register("heading")}
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter the heading"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="position-relative form-group">
                                                <label>
                                                    Content
                                                </label>
                                                <input
                                                    {...register("content")}
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter the content"
                                                />
                                            </div>
                                        </div>


                                        <div className="col-md-6">
                                            <div className="position-relative form-group">
                                                <label>
                                                    Subheading 1
                                                </label>
                                                <input
                                                    {...register("subheading1")}
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter the subheading"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="position-relative form-group">
                                                <label>
                                                    Content 1
                                                </label>
                                                <input
                                                    {...register("content1")}
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter the content"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="position-relative form-group">
                                                <label>
                                                    Icon 1
                                                </label>
                                                <input
                                                   
                                                    type="file"
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <img src="" alt="" />
                                        </div>

                                        <div className="col-md-6">
                                            <div className="position-relative form-group">
                                                <label>
                                                    Subheading 2
                                                </label>
                                                <input
                                                    {...register("subheading2")}
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter the subheading"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="position-relative form-group">
                                                <label>
                                                    Content 2
                                                </label>
                                                <input
                                                    {...register("content2")}
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter the content"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="position-relative form-group">
                                                <label>
                                                    Icon 2
                                                </label>
                                                <input
                                                   
                                                    type="file"
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <img src="" alt="" />
                                        </div>

                                        <div className="col-md-6">
                                            <div className="position-relative form-group">
                                                <label>
                                                    Subheading 3
                                                </label>
                                                <input
                                                    {...register("subheading1")}
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter the subheading"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="position-relative form-group">
                                                <label>
                                                    Content 3
                                                </label>
                                                <input
                                                    {...register("content1")}
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter the content"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="position-relative form-group">
                                                <label>
                                                    Icon 3
                                                </label>
                                                <input
                                                   
                                                    type="file"
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <img src="" alt="" />
                                        </div>


                                        <div className="col-md-12">
                                            <div className="position-relative form-group">
                                                <label>
                                                    Description
                                                </label>
                                                <JoditEditor
                                                    ref={editor1}
                                                    value={description1}
                                                    config={config}
                                                    tabIndex={1}
                                                    onBlur={(newContent) => setDescription1(newContent)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>


                                <fieldset class="border rounded p-3 px-4 mb-4">
                                    <legend class="float-none w-auto px-3">
                                        Images
                                    </legend>
                                    <div className="form-row">
                                        <div className="col-md-6">
                                            <div className="position-relative form-group">
                                                <label>
                                                    Image1
                                                </label>
                                                <input
                                                    type="file"
                                                    onChange={(e) => setImage1(e.target.files[0])}
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6 d-flex align-items-center justify-content-center">
                                            {image1 ? (
                                                <img src={URL.createObjectURL(image1)} alt="Uploaded Image" width="100px" />
                                            ) : null}

                                        </div>
                                        <div className="col-md-6">
                                            <div className="position-relative form-group">
                                                <label>
                                                    Image2
                                                </label>
                                                <input
                                                    type="file"
                                                    onChange={(e) => setImage2(e.target.files[0])}
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6 d-flex align-items-center justify-content-center">
                                            {image2 ? (
                                                <img src={URL.createObjectURL(image2)} alt="Uploaded Image" width="100px" />
                                            ) : null}

                                        </div>
                                        <div className="col-md-6">
                                            <div className="position-relative form-group">
                                                <label>
                                                    Image3
                                                </label>
                                                <input
                                                    type="file"
                                                    onChange={(e) => setImage3(e.target.files[0])}
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6 d-flex align-items-center justify-content-center">
                                            {image3 ? (
                                                <img src={URL.createObjectURL(image3)} alt="Uploaded Image" width="100px" />
                                            ) : null}

                                        </div>
                                    </div>
                                </fieldset>

                                <fieldset class="border rounded p-3 px-4 mb-4">
                                    <legend class="float-none w-auto px-3">
                                        SEO section
                                    </legend>
                                    <div className="form-row">
                                        <div className="col-md-6">
                                            <div className="position-relative form-group">
                                                <label>
                                                    Title
                                                </label>
                                                <input
                                                    {...register("title")}
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter the title"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="position-relative form-group">
                                                <label>
                                                    Keyword
                                                </label>
                                                <input
                                                    {...register("keyword")}
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter the keyword"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="position-relative form-group">
                                                <label>
                                                    Description
                                                </label>
                                                <JoditEditor
                                                    ref={editor3}
                                                    value={description3}
                                                    config={config}
                                                    tabIndex={1}
                                                    onBlur={newContent => setDescription3(newContent)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <button className="mt-2 px-3 btn btn-primary" onClick={handleSubmit(onSubmit)} disabled={isSubmitting}>{isSubmitting ? "Creating..." : "Create"}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page