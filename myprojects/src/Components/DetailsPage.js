import React from 'react';
const DetailsPage = () => {
    return (
        <>
            <div className="col-md-4">
                <div className="card1">
                    <img src={""} className="card-img-top" alt="... " />
                    <div className="card-body" >
                        <h5 className="card-title">watch</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary" onClick={alert}>Read More</a>
                    </div>
                </div>
            </div>
            {/* <div className='container'>Some quick example text to build on the card title and make up the bulk of the card's conten</div> */}
        </>
    )
}
export default DetailsPage;