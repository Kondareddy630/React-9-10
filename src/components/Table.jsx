import React from 'react'

function Table({headings,data}) {


  return (
    <div>


        <table className='table table-bordered table-striped shadow'>


            <thead>
                <tr>
                    {
                        headings.map((h)=><th>{h}</th>)
                    }
                </tr>
            </thead>
            <tbody>
                {
                    data.map((obj)=>
                        <tr>
                            {
                                Object.keys(obj).map((value)=><td>{obj[value]}</td>)
                            }
                          
                        </tr>
                    )
                }

            </tbody>

        </table>
       

    </div>
  )
}

export default Table