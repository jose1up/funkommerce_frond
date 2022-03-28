

export default function Pager({ funkoPerPage, pager, funkos }) {
    const pageNumber = []
    for (let i = 1; i <= Math.ceil(funkos / funkoPerPage); i++) {
        pageNumber.push(i)
    }
    return (
        <div >
            <div className="page" >
                {pageNumber && pageNumber.map(n => (
                        <span onClick={() => pager(n)} key={n} className= 'item'>  {n}  </span>
                ))
                }
            </div>
        </div>
    )
}