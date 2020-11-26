import React, {useState,useEffect} from 'react'

import Axios from 'axios'

import '../node_modules/bootstrap/dist/css/bootstrap.css';

import Cardi from './Coponents/Card'

import CardInfo from './Coponents/CardInfo'

import Pagination from './Coponents/Pagination'



function App() {

    const [res, setRes] = useState([]);
    const [selected, setSelected] = useState(null);


    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);
    



    useEffect(() => {
        const fetch = async () => {
            await Axios.get("https://gorest.co.in/public-api/posts").then(res => {
                const profile = res.data.data;
    
                // profile.map(items => setRes(items) )
                // setRes(profile[0].id)
                setRes(profile);
                
            }).catch(e => console.log(e));
    
    
        };

        fetch()
    }, [])
   

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = res.slice(indexOfFirstPost, indexOfLastPost);
    //on click pagination
    const paginate = pageNumber => setCurrentPage(pageNumber);

    



    return (

        <div className="container">
            <div className="row" style={{marginTop: "20px"}}>
                <div className="col">
                    <Cardi items={currentPosts}  setVal={setSelected}  />

                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={res.length}
                        paginate={paginate}
                    />
                    <br />
                    
                </div>

                <div className="col"><CardInfo item={res} id={selected} /></div>
            </div>
        </div>

    );
}








export default App

// https://gorest.co.in/public-api/posts