import React,{Fragment} from 'react'
import { CardBody, CardTitle, CardText, Card  } from "reactstrap";

const CardInfo = ({item, id}) => {



    const itemd = item.map((item,index) => {

        return item.id === id? (
            <Fragment  key={index}>
                <Card >
                    <CardBody className="text-center">
                        <CardTitle className="text-primary">
                            <h1><span className="pr-2">item: {id}</span></h1>
                            {item.title}
                        </CardTitle>
                        <CardText>{item.body}</CardText>
                        <CardText className="text-center">Created Time: <span style={{color: "red"}}>{item.created_at.slice(12,19)}</span> Created Date: <span style={{color: "red"}}>{item.created_at.slice(0,10)}</span></CardText>
                       
                    </CardBody>
                </Card>
            </Fragment>
            
            ): ''
    })
    

    // const {id,title} = item[0].item
    // const detail = item
    // console.log(title)


    
    return (
       <div>
        {itemd}
       </div>
    )
}


export default CardInfo