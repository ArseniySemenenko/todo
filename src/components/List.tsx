import React from 'react';
import {IPost} from "../models";
import Item from "./Item";

interface IProps{
    posts: IPost[],
    title:string,
    del: (id:number) => void,
    red: (post: IPost, title: string, body: string) => void,
}

function List( {posts , title , del , red} : IProps) {
    return (
        <div className="">
            <h1 className="mt-10 text-3xl text-center font-bold">{title}</h1>
            <div className="mt-10">
                {
                    posts.map((post , index) => <Item red={red} del={del} post={post} number={index+1}/> )
                }
            </div>
        </div>
    );
}

export default List;