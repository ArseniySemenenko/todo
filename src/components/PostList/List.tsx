import React from 'react';
import {IPost} from "../../models";
import Item from "../PostItem/Item";
import "./List.css";

interface IProps{
    posts: IPost[],
    title:string,
    del: (id:number) => void,
    red: (post: IPost, title: string, body: string) => void,
}

function List( {posts , title , del , red} : IProps) {
    if(posts.length === 0){
        return(
            <div className="title">
                <h1>{title}</h1>
                <div className="sub">
                    <h1>No Posts Found</h1>
                </div>
            </div>
        );
    }
    else{
        return (
            <div className="title">
                <h1>{title}</h1>
                <div className="sub">
                    {
                        posts.map((post , index) => <Item red={red} del={del} post={post} number={index+1}/> )
                    }
                </div>
            </div>
        );
    }
}

export default List;