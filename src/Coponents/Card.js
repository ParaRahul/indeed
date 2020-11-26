import React from 'react'

import { CardBody, CardTitle, CardText, Card  } from "reactstrap";




const Cardi = ({items, setVal})=>{

    const expand= (id) => {

        setVal(id)
        console.log(id)
    }

    const detail =({id,title})=>(
        <Card key={id} onClick={()=> expand(id)}  >
            <CardBody className="text-center">
                <CardTitle className="text-primary">
                    <h1><span className="pr-2">item: {id}</span></h1>
                </CardTitle>
                <CardText>
                    {title}
                </CardText>
            </CardBody>
        </Card>
        )


  
    const item = items.map(item => detail(item))
    

    return item
   
}


export default Cardi