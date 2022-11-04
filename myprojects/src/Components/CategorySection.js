import React, { useState } from 'react'
import Categories from './Categories';
// const Men = [
//     {
//         id: 1,
//         title: "Men watch",
//         image: "../images (1).jpeg",

//     },
//     {
//         id: 1,
//         title: "Formal Suits",
//         image: "../download.jpeg",

//     },

//     {
//         id: 1,
//         title: "Shirt",
//         image: "../download (1).jpeg",

//     },
// ];
// const Women = [
//     {
//         id: 1,
//         title: "watchgvfdgf",
//         image: "../images (1).jpeg",

//     },

//     {
//         id: 1,
//         title: "watch",
//         image: "../images (1).jpeg",

//     },      
// ];
const ABC = [
    {
        name: "Men",
        id: "Men",
        image: "../images (1).jpeg",

    },
    {
        name: "Women",
        id: "Women",
    },
    {
        name: "Childern",
        id: "Childern",
    },
    {
        name: "Black",
        id: "Black",
    },
    {
        name: "White",
        id: "White",
    },
    {
        name: "All",
        id: "All",
    }
]
const CategorySection = () => {
    const [blockdata, setData] = useState(Categories);
    function sayHello() {
        setData(ABC);

    }
    // function sayHello() {
    //     setData(Women);

    // }
    // document.getElementById("men").click(function(){
    //     alert("sd")
    //   });
    // function getMen(){
    //     alert("sd")
    // }
    const obj = [
        'men',
        'women',
        'childern',
        'black',
        'white',
        'all',
    ]
    return (
        <>
            <h1 className="text-center text-info">Let's shooping</h1>
            <div className="container-fluid mx-2">
                <div className="row mt-5 mx-2">
                    <div className="col-md-3" >
                        {ABC.map((value) => {
                            return (
                                <>
                                    <button className="btn btn-warning w-100 mb-4" id={value.id} onClick={sayHello} >{value.name}</button>
                                </>
                            )
                        })}
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            {blockdata.map((values) => {
                                const { id, title, image } = values;
                                return (
                                    <>
                                        <div className="col-md-4" key={id}>
                                            <div className="card">
                                                <img src={image} className="card-img-top" alt="... " />
                                                <div className="card-body" >
                                                    <h5 className="card-title">{title}</h5>
                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <a className="btn btn-dark" onClick={alert}>Add to card</a>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategorySection;

