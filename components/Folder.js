import Image from 'next/image'
import { useRouter } from 'next/router'


export default function Folder({name,parent}) {
    const router = useRouter();
    const handleNavigate=(path)=>{
        router.push(`/?folder=${path}`)
      }

    return (
      <>
      <div onClick={()=>handleNavigate(parent+"/"+name)}  className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <Image className="rounded-t-lg" src="/folder.svg" alt="" height={200} width={200}/>
    <div className="p-5">
            <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">{name}</p>
    </div>
</div>
      </>
    )
  }