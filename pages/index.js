import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import fsPromises from 'fs/promises'
import fs from 'fs';
import Breadcrumb from '../components/Breadcrumb'
import File from '../components/File'
import Folder from '../components/Folder'
import Link from 'next/link'
import {useEffect} from 'react'
const hljs = require('highlight.js');
import 'highlight.js/styles/github.css';

export default function Home({data,path,fileContent}) {

  useEffect(()=>{
    // first, find all the div.code blocks
document.querySelectorAll('div.code').forEach(el => {
  // then highlight each
  hljs.highlightElement(el);
});
  },[])
  return (
    <>
    <Breadcrumb path={path}/>
    {data?<div className="grid grid-cols-6 gap-4">
 
    {data.map(d=>{
      if(d.isFile===true){
        return <div key={d.name}>
          <File name={d.name} parent={path}/>
          </div>
      }
      else{
        return <div key={d.name}>
          <Folder name={d.name} parent={path}/>
          </div>
      }
    })}
    </div>:<pre><code className='code'>{fileContent}</code></pre>}
    </>
  )
}

export async function getServerSideProps(context) { 
  let {folder='/'} = context.query; 
  folder = folder===""?'/':folder;
  let data=false;
  let fileContent=false;
  var stats = fs.statSync(folder);
  if(stats.isDirectory()){
  data = await fsPromises.readdir(folder,{withFileTypes: true}) 
  data = data.map((d)=>{ 
    return { 
      name:d.name, 
      isFile:d.isFile() 
    } 
  }) 
}
else{
  try {
    const data = fs.readFileSync(folder, 'utf8')
    fileContent=data;
  } catch (err) {
    console.error(err)
  }
}
  return { 
    props: { 
      data, 
      path:folder,
      fileContent,
    }, // will be passed to the page component as props } }
}
}