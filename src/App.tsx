import React, {useState} from 'react';
import {IPost} from "./models";
import List from "./components/List";
import Form from "./components/Form";

function App() {
    //all posts
    const [posts , setPosts] = useState<IPost[]>([
        {id: 0 , title:'JavaScript' , body:"Programming landuage"}
    ]);
    //visible posts
    const [render , setRender] =  useState<IPost[]>(posts);

    //all tags
    const [tags , setTags] = useState<string[]>(['all']);

    function sortByTag(tag: string){
        if(tag === 'all'){
            setRender(posts);
        }
        else{
            const sorted = []
            for(let i of posts){
                if(i.title.includes(tag)){
                    sorted.push(i);
                }
            }
            setRender(sorted);
        }
    }

    function createItem(title:string , body:string , e:any){
        e.preventDefault();

        const newItem = {
            id: Date.now(),
            title:title,
            body: body,
            done:false,
        }

        updatePosts([...posts , newItem]);
    }

    function deleteItem(id:number){
        updatePosts(posts.filter(post => post.id !== id));
    }

    function redactPost(post: IPost , title: string , body: string){
        const index = posts.indexOf(post);
        updatePosts([...posts.slice(0 , index) , {id: post.id , title: title , body: body} , ...posts.slice(index+1)])
    }

    function updatePosts(posts: IPost[]){
        setTags(['all']);
        let tags = ['all'];
        //find all tags in posts
        for(let i of posts){
            if(i.title.includes('#')){
                const a = i.title.split(" ");
                for(let i of a){
                    if(i.includes('#')){
                        if(!tags.includes(i)){
                            tags.push(i);
                        }
                    }
                }
            }
        }
        setTags(tags);
        console.log(tags);
        setPosts(posts);
        setRender(posts);
    }

  return (
    <div className="container max-w-2xl ml-auto mr-auto">
        <Form createPost={createItem}/>
        <select 
        onChange={(e) => {
            sortByTag(e.target.value);
            console.log(e.target.value);
        }}>
            {
                tags.map(tag => <option>{tag}</option>)
            }
        </select>
        <List red={redactPost} del={deleteItem} posts={render} title={"To Do"}/>
    </div>
  );
}

export default App;
