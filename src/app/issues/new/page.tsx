import React from "react";
import "easymde/dist/easymde.min.css";
import Form from "@/app/issues/new/Form";


const NewIssuePage = async () => {

    return (
        <div className="max-w-xl">
            <Form/>
        </div>
    );
};

export default NewIssuePage;
