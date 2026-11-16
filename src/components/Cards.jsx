import Card from "./Card";


function Cards()
{

    return(
        
        <div className="row container">

            <div className="col-lg-4">
               <Card></Card>
            </div>

             <div className="col-lg-4">
                <Card></Card>
            </div>


             <div className="col-lg-4">
                <Card></Card>
            </div>


        </div>
    )


}


export default Cards;