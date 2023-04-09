import React, {useState} from 'react';
import {IPost} from "../models";

interface IProps{
    post: IPost,
    number: number,
    del: (id:number) => void,
    red: (post: IPost, title: string, body: string) => void
}

function Item({post , number , del , red} : IProps) {

    const [done , setDone] = useState(false);
    const [redact , setRedact] = useState(false);
    const [title , setTitle] = useState(post.title);
    const [body , setBody] = useState(post.body);

    return (
        <div className="flex justify-between items-center mt-5 p-10 border text-xl rounded-[20px] border-gray-400">
            <div>
                <strong>{number}. {post.title}</strong>
                <p>{post.body}</p>
            </div>

            {
                redact &&
                <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    red(post , title, body);
                }}>
                    <input 
                        className="border border-gray-400 rounded w-[200px]"
                        placeholder='title'
                        type="text"
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }} 
                    />
                    <input 
                        className="border border-gray-400 rounded w-[200px]"
                        placeholder='body'
                        type="text"
                        value={body}
                        onChange={(e) => {
                            setBody(e.target.value);
                        }} 
                    />
                    <input type="submit" />
                </form>
            </div>
            }

            <div className="flex flex-row">
                <input
                    type="checkbox"
                    className="mr-5"
                    checked={done}
                    onChange={() => {
                        setDone(!done);
                    }}
                />
                <div className="flex flex-col">
                <button
                    onClick={() => {
                        del(post.id);
                    }}
                >Delete</button>
                <button
                    onClick={() => {
                        setRedact(!redact);
                    }}
                >Redact</button>
                </div>
            </div>
        </div>
    );
}

export default Item;