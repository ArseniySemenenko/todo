import React, {useState} from 'react';
import {IPost} from "../../models";
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import Submit from '../UI/Submit/Submit';
import "./Item.css";

interface IProps{
    post: IPost,
    number: number,
    del: (id:number) => void,
    red: (post: IPost, title: string, body: string) => void
}

function Item({post , number , del , red} : IProps) {

    const [done , setDone] = useState(false);
    const [redact , setRedact] = useState(false); //is redact inputs visible
    const [title , setTitle] = useState(post.title);
    const [body , setBody] = useState(post.body);

    return (
        <div className="post-item">
            <div>
                <strong>{number}. {post.title}</strong>
                <p>{post.body}</p>
            </div>

            {
                redact &&
                <div className='redact'>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    red(post , title, body);
                    setRedact(!redact);
                }}>
                    <div className='redact-inputs'>
                        <Input 
                        placeholder='title'
                        type="text"
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }} 
                    />
                    <Input 
                        placeholder='body'
                        type="text"
                        value={body}
                        onChange={(e) => {
                            setBody(e.target.value);
                        }} 
                    />
                    </div>
                    <Submit type="submit" value={"Save"} onClick={()=>{}}/>
                </form>
            </div>
            }

            <div className="post-functions">
                <input
                    type="checkbox"
                    checked={done}
                    onChange={() => {
                        setDone(!done);
                    }}
                />
                <div className="post-buttons">
                <Button 
                    onClick={() => {
                        del(post.id);
                    }}
                    text={"Delete"}
                />
                <Button 
                    onClick={() => {
                        setRedact(!redact);
                    }}
                    text={"Redact"}
                />
                </div>
            </div>
        </div>
    );
}

export default Item;