"use client"

import { useState, useRef, useEffect } from "react";
import api from "@/_config/config";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";
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

    const [main_image, setMainImage] = useState();
    const [image1, setImage1] = useState();
    const [image2, setImage2] = useState();
    const [image3, setImage3] = useState();

    const [soltionList, setSolutionList] = useState();
    const [blogData, setBlogData] = useState();
    const searchParams = useSearchParams();
    const id = searchParams.get("id");

    const config = {
        height: 300,
        readonly: false
    };

    const router = useRouter();
    const { register, handleSubmit, reset, formState: { isSubmitting,errors } } = useForm()

    const onSubmit = async (data) => {
        try {
            const formdata = new FormData();
            formdata.append("solution_id", data.solution_id);
            formdata.append("heading", data.heading);
            formdata.append("slug", data.slug);
            formdata.append("blog_date", data.blog_date);
            formdata.append("description1", description1 ? description1 : "");
            formdata.append("description2", description2 ? description2 : "");
            formdata.append("image1", image1);
            formdata.append("image2", image2);
            formdata.append("image3", image3);
            formdata.append("main_image", main_image);
            formdata.append("title", data.title);
            formdata.append("keyword", data.keyword);
            formdata.append("meta_description", description3 ? description3 : "");
            formdata.append("id", id);

            const res = await api.post("/blog/update_blog", formdata);
            console.log(res.data);
            if (res.data.status == 1) {
                toast.success(res.data.message);
                router.push("/admin/blogs/view");
            } else {
                toast.error(res.data.message);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getSolutionList();
        getBlogData();
    }, []);

    const getSolutionList = async (req, res) => {
        try {
            const res = await api.get("/solution/get_solution_list");
            if (res.data.status == 1) {
                setSolutionList(res.data.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const getBlogData = async () => {
        try {
            const res = await api.post("/blog/get_blog_data", {
                id: id
            });
            if (res.data.status == 1) {
                setBlogData(res.data.data);
                setDescription1(res.data.data.description1)
                setDescription2(res.data.data.description2)
                setDescription3(res.data.data.meta_description)
            }
        } catch (err) {
            console.log(err);
        }
    }

    console.log(blogData);

    useEffect(() => {
        if (blogData) {
            reset(blogData);
        }
    }, [blogData, reset]);

    return (
        <div className="app-main__inner">
            <div className="row">
                <div className="col-md-12 col-xl-12">
                    <div className="main-card mb-3 card">
                        <div className="card-header">
                            Update Blog
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
                                                    Solution Name
                                                </label>
                                                <select {...register("solution_id",{required:{
                                                        value:true,
                                                        message:"Please provide the solution name"
                                                    }})}
                                                    className="form-control">
                                                    <option hidden defaultChecked value={""}>Select solution</option>
                                                    {
                                                        soltionList?.map((ele) =>
                                                            <option value={ele._id}>{ele.solution_name}</option>
                                                        )
                                                    }
                                                </select>
                                                {errors.solution_id ? <p style={{ color: "red" }}>{errors.solution_id.message}</p> : null}

                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="position-relative form-group">
                                                <label>
                                                    Slug
                                                </label>
                                                <input
                                                    {...register("slug",{required:{
                                                        value:true,
                                                        message:"Please provide the blog slug"
                                                    }})}
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter the blog slug"
                                                />
                                                {errors.slug ? <p style={{ color: "red" }}>{errors.slug.message}</p> : null}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="position-relative form-group">
                                                <label>
                                                    Heading
                                                </label>
                                                <input
                                                    {...register("heading",{required:{
                                                        value:true,
                                                        message:"Please provide the blog heading"
                                                    }})}
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter the blog heading"
                                                />
                                                {errors.heading ? <p style={{ color: "red" }}>{errors.heading.message}</p> : null}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="position-relative form-group">
                                                <label>
                                                    Blog Date
                                                </label>
                                                <input
                                                    {...register("blog_date")}
                                                    type="date"
                                                    className="form-control"
                                                    placeholder="Enter the blog heading"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="position-relative form-group">
                                                <label>
                                                    Main Image
                                                </label>
                                                <input
                                                    type="file"
                                                    className="form-control"
                                                    onChange={(e) => setMainImage(e.target.files[0])}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-2 d-flex align-items-center">
                                            {
                                                main_image ?
                                                    <img src={URL.createObjectURL(main_image)} alt="" width={100} /> :
                                                    <img src={blogData?.main_image} alt="" width={100} />

                                            }
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
                                            ) : <img src={blogData?.image1} alt="" width={100} />}

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
                                            ) : <img src={blogData?.image2} alt="" width={100} />
                                            }

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
                                            ) : <img src={blogData?.image3} alt="" width={100} />}

                                        </div>
                                    </div>
                                </fieldset>

                                <fieldset class="border rounded p-3 px-4 mb-4">
                                    <legend class="float-none w-auto px-3">
                                        Section
                                    </legend>
                                    <div className="form-row">
                                        <div className="col-md-12">
                                            <div className="position-relative form-group">
                                                <label>
                                                    Description
                                                </label>
                                                <JoditEditor
                                                    ref={editor2}
                                                    value={description2}
                                                    config={config}
                                                    tabIndex={1}
                                                    onBlur={(newContent) => setDescription2(newContent)}
                                                />
                                            </div>
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

                                <button className="mt-2 px-3 btn btn-primary" onClick={handleSubmit(onSubmit)} disabled={isSubmitting}>{isSubmitting ? "Update..." : "Update"}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page