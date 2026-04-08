import React, {useState} from 'react';
import Input from '../UI/Input/Input';
import Submit from '../UI/Submit/Submit';
import "./Form.css";

interface IProps{
    createPost: (title:string , body:string , e:any) => void,

}

function Form({createPost} : IProps) {

    const [title , setTitle] = useState("");
    const [body , setBody] = useState("");

    return (
        <form className="form">
            <div>
                <Input
                    //className="border border-gray-400 rounded mr-1"
                    type="text"
                    placeholder="title"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                />

                <Input
                    //className="border border-gray-400 rounded mr-1"
                    type="text"
                    placeholder="body"
                    value={body}
                    onChange={(e) => {
                        setBody(e.target.value)
                    }}
                />
            </div>
            <div>
                <Submit
                    //className="border border-gray-400 rounded mr-1"
                    type="submit"
                    value="Create"
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