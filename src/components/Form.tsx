import React, {useState} from 'react';

interface IProps{
    createPost: (title:string , body:string , e:any) => void,

}

function Form({createPost} : IProps) {

    const [title , setTitle] = useState("");
    const [body , setBody] = useState("");

    return (
        <form className="flex justify-between mt-5">
            <div>
                <input
                    className="border border-gray-400 rounded mr-1"
                    type="text"
                    placeholder="title"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                />

                <input
                    className="border border-gray-400 rounded mr-1"
                    type="text"
                    placeholder="body"
                    value={body}
                    onChange={(e) => {
                        setBody(e.target.value)
                    }}
                />
            </div>
            <div>
                <input
                    className="border border-gray-400 rounded mr-1"
                    type="submit"
                    value="create"
                    onClick={(e) => {
                        createPost(title , body , e);
                        setTitle("");
                        setBody("");
                    }}
                />
            </div>
        </form>
    );
}

export default Form;