"use client"

import { useState, useRef, useEffect } from "react";
import api from "@/_config/config";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false })
import { useForm } from "react-hook-form"


const page = () => {
    const editor1 = useRef(null);
    const editor2 = useRef(null);
    const [description1, setDescription1] = useState();
    const [description2, setDescription2] = useState();

    const [breadcrumb_image, setBreadCrumbImage] = useState();
    const [image1, setImage1] = useState();
    const [image2, setImage2] = useState();
    const [image3, setImage3] = useState();
    const [image4, setImage4] = useState();
    const [icon1, setIcon1] = useState();
    const [icon2, setIcon2] = useState();
    const [icon3, setIcon3] = useState();


    const [data, setData] = useState();

    const config = {
        height: 300,
        readonly: false
    };


    const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm()

    const onSubmit = async (data) => {
        try {
            const formdata = new FormData();
            console.log(data);

            formdata.append("description", description1 ? description1 : "");
            formdata.append("subheading1", data.subheading1);
            formdata.append("content1", data.content1);
            formdata.append("subheading2", data.subheading2);
            formdata.append("content2", data.content2);
            formdata.append("subheading3", data.subheading3);
            formdata.append("content3", data.content3);
            formdata.append("main_heading", data.main_heading);
            formdata.append("main_content", data.main_content);
            formdata.append("image1", image1);
            formdata.append("image2", image2);
            formdata.append("image3", image3);
            formdata.append("image4", image4);
            formdata.append("icon1", icon1);
            formdata.append("icon2", icon2);
            formdata.append("icon3", icon3);
            formdata.append("breadcrumb_image", breadcrumb_image);
            formdata.append("title", data.title);
            formdata.append("keyword", data.keyword);
            formdata.append("meta_description", description2 ? description2 : "");
            formdata.append("id", data._id)

            const res = await api.post("/vision_and_value/update_vision_and_values", formdata);
            console.log(res.data);
            if (res.data.status == 1) {
                toast.success(res.data.message);
            } else {
                toast.error(res.data.message);
            }
        } catch (err) {
            console.log(err);
        }
    }


    useEffect(() => {
        getData();
    }, [])

    useEffect(() => {
        if (data) {
            reset(data);
        }
    }, [data, reset])

    const getData = async () => {
        try {
            const res = await api.get("/vision_and_value/get_vision_value");
            console.log(res.data);
            setData(res.data.data);
            setDescription1(res.data.data.description);
            setDescription2(res.data.data.meta_description);
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
                            Vision and values
                        </div>

                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <fieldset class="border rounded p-3 px-4 mb-4">
                                    <legend class="float-none w-auto px-3">
                                        Image
                                    </legend>
                                    <div className="form-row">
                                        <div className="col-md-4">
                                            <div className="position-relative form-group">
                                                <label>
                                                    Bread crumb image
                                                </label>
                                                <input
                                                    type="file"
                                                    name="breadcrumb_image"
                                                    className="form-control"
                                                    onChange={(e) => setBreadCrumbImage(e.target.files[0])}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-2 d-flex align-items-center justify-content-center">
                                            {breadcrumb_image ? (
                                                <img src={URL.createObjectURL(breadcrumb_image)} alt="" width="100px" />
                                            ) : <img src={data?.breadcrumb_image} alt="" width="100px" />}
                                        </div>

                                        <div className="col-md-6"></div>
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
                                                    Sub heading 1
                                                </label>
                                                <input
                                                    type="text"
                                                    {...register("subheading1")}
                                                    className="form-control"
                                                    placeholder="Enter the subheading"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="position-relative form-group">
                                                <label>
                                                    Sub heading 2
                                                </label>
                                                <input
                                                    type="text"
                                                    {...register("subheading2")}
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
                                                <textarea type="text"
                                                    {...register("content1")}
                                                    className="form-control"
                                                    placeholder="Enter the content">
                                                </textarea>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="position-relative form-group">
                                                <label>
                                                    Content 2
                                                </label>
                                                <textarea type="text"
                                                    {...register("content2")}
                                                    className="form-control"
                                                    placeholder="Enter the content">
                                                </textarea>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="position-relative form-group">
                                                <label>
                                                    Icon 1
                                                </label>
                                                <input
                                                    type="file"
                                                    name="icon1"
                                                    className="form-control"
                                                    onChange={(e) => setIcon1(e.target.files[0])}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-2 d-flex align-items-center justify-content-center">
                                            {icon1 ? (
                                                <img src={URL.createObjectURL(icon1)} alt="" width="100px" />
                                            ) : <img src={data?.icon1} alt="" width="100px" />}
                                        </div>


                                        <div className="col-md-4">
                                            <div className="position-relative form-group">
                                                <label>
                                                    Icon 2
                                                </label>
                                                <input
                                                    type="file"
                                                    name="icon2"
                                                    className="form-control"
                                                    onChange={(e) => setIcon2(e.target.files[0])}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-2 d-flex align-items-center justify-content-center">
                                            {icon2 ? (
                                                <img src={URL.createObjectURL(icon2)} alt="" width="100px" />
                                            ) : <img src={data?.icon2} alt="" width="100px" />}
                                        </div>

                                        <div className="col-md-4">
                                            <div className="position-relative form-group">
                                                <label>
                                                    Image 1
                                                </label>
                                                <input
                                                    type="file"
                                                    name="image1"
                                                    className="form-control"
                                                    onChange={(e) => setImage1(e.target.files[0])}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-2 d-flex align-items-center justify-content-center">
                                            {image1 ? (
                                                <img src={URL.createObjectURL(image1)} alt="" width="100px" />
                                            ) : <img src={data?.image1} alt="" width="100px" />}
                                        </div>


                                        <div className="col-md-4">
                                            <div className="position-relative form-group">
                                                <label>
                                                    Image 2
                                                </label>
                                                <input
                                                    type="file"
                                                    name="image2"
                                                    className="form-control"
                                                    onChange={(e) => setImage2(e.target.files[0])}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-2 d-flex align-items-center justify-content-center">
                                            {image2 ? (
                                                <img src={URL.createObjectURL(image2)} alt="" width="100px" />
                                            ) : <img src={data?.image2} alt="" width="100px" />}
                                        </div>

                                        <div className="col-md-6">
                                            <div className="position-relative form-group">
                                                <label>
                                                    Sub heading 3
                                                </label>
                                                <input
                                                    type="text"
                                                    {...register("subheading3")}
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
                                                <textarea type="text"
                                                    {...register("content3")}
                                                    className="form-control"
                                                    placeholder="Enter the content">
                                                </textarea>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="position-relative form-group">
                                                <label>
                                                    Icon 3
                                                </label>
                                                <input
                                                    type="file"
                                                    name="icon3"
                                                    className="form-control"
                                                    onChange={(e) => setIcon3(e.target.files[0])}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-2 d-flex align-items-center justify-content-center">
                                            {icon3 ? (
                                                <img src={URL.createObjectURL(icon3)} alt="" width="100px" />
                                            ) : <img src={data?.icon3} alt="" width="100px" />}
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
                                                    heading
                                                </label>
                                                <input
                                                    type="text"
                                                    {...register("main_heading")}
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
                                                <textarea type="text"
                                                    {...register("main_content")}
                                                    className="form-control"
                                                    placeholder="Enter the content">
                                                </textarea>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="position-relative form-group">
                                                <label>
                                                    Image 1
                                                </label>
                                                <input
                                                    type="file"
                                                    name="image3"
                                                    className="form-control"
                                                    onChange={(e) => setImage3(e.target.files[0])}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-2 d-flex align-items-center justify-content-center">
                                            {image3 ? (
                                                <img src={URL.createObjectURL(image3)} alt="" width="100px" />
                                            ) : <img src={data?.image3} alt="" width="100px" />}
                                        </div>


                                        <div className="col-md-4">
                                            <div className="position-relative form-group">
                                                <label>
                                                    Image 2
                                                </label>
                                                <input
                                                    type="file"
                                                    name="image4"
                                                    className="form-control"
                                                    onChange={(e) => setImage4(e.target.files[0])}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-2 d-flex align-items-center justify-content-center">
                                            {image4 ? (
                                                <img src={URL.createObjectURL(image4)} alt="" width="100px" />
                                            ) : <img src={data?.image4} alt="" width="100px" />}
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
                                                    ref={editor2}
                                                    value={description2}
                                                    config={config}
                                                    tabIndex={1}
                                                    onBlur={newContent => setDescription2(newContent)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>

                                <button className="mt-2 px-3 btn btn-primary" onClick={handleSubmit(onSubmit)} disabled={isSubmitting}>{isSubmitting ? "Updating..." : "Update"}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page