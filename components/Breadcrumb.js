import Link from 'next/link'

export default function Breadcrumb({path}) {
    const links = path.split("/");
    let currentPath = '';
    const BreadcrumbPaths = links.map(link=>{
        currentPath = currentPath+link+`/`
        let name = link
        if(currentPath=="/"){
            name="root"
        }
        return {
            name,
            path: currentPath
        }
    })
    return (
      <>
      <nav className="flex py-3 px-5 text-gray-700 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
  <ol className="inline-flex items-center space-x-1 md:space-x-3">
    {BreadcrumbPaths.slice(0,-1).map(BreadcrumbPath=>(<li key={BreadcrumbPath.path}>
      <div className="flex items-center" >
      <Link href={`/?folder=${BreadcrumbPath.path}`}>
        <a className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">{BreadcrumbPath.name}</a>
        </Link>
        <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
      </div>
    </li>))}
    {BreadcrumbPaths.length>2&&<li aria-current="page">
      <div className="flex items-center">
        <span className="ml-1 text-sm font-medium text-gray-400 md:ml-2 dark:text-gray-500">{BreadcrumbPaths[BreadcrumbPaths.length-1].name}</span>
        <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
      </div>
    </li>}
  </ol>
</nav>
      </>
    )
  }