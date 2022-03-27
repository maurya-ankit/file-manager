import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import fsPromises from 'fs/promises'
import fs from 'fs';
import Breadcrumb from '../components/Breadcrumb'
import Menu from '../components/Menu'
import File from '../components/File'
import Folder from '../components/Folder'
import Link from 'next/link'
import {useEffect,useState} from 'react'
const hljs = require('highlight.js');
import 'highlight.js/styles/github.css';
import axios from 'axios'

export default function Home({data,path,fileContent,stats}) {
  const [fileContent_,setFileContent_] = useState(fileContent);
  console.log(fileContent_)
  useEffect(()=>{
    // first, find all the div.code blocks
  document.querySelectorAll('div.code').forEach(el => {
    // then highlight each
    hljs.highlightElement(el);
  });
  },[])
  useEffect(()=>{
    setFileContent_(fileContent)
  },[fileContent])
  const handleSave = () => {
    axios
      .patch(`/api/file/?filePath=${path}`, {
        fileContent,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
    <Head>
      <title>FIle-Manager</title>
    </Head>
    <Breadcrumb path={path}/>
    <Menu path={path} isFile={!data} stats={stats} fileContent={fileContent_}/>
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
    </div>:<><pre><code className='code'>
      <textarea className="
        form-control
        block
        w-full
        h-[80vh]
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      " value={fileContent_} onChange={(e)=>setFileContent_(e.target.value)}/>
      </code></pre>
      <div className="flex justify-end mt-2">
      <button
            data-modal-toggle="popup-modal-newfolder"
            onClick={handleSave}
            type="button"
            class="align-left text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
          >
            Save
          </button>
          <button
            data-modal-toggle="popup-modal-newfolder"
            type="button"
            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          >
            No, cancel
          </button>
          </div>
      </>}
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
      stats:JSON.parse(JSON.stringify(stats))
    }, // will be passed to the page component as props } }
}
}