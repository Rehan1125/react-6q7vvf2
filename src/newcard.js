import React from "react";
const menuitems = (items) => {
  return (
    <>
      <div className="menu-items container-fluid-mt-5">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row my-5">
              {




                items.map(Element) => {
                 const {id, title, description, category, image} = Element;
              return (
              <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5" key={id}>
                <div className="row item-inside">
                  <div className="col=12 col-md-12 col-lg-4 img-div">
                    <img src={image} alt="menu-img" className="img-fluid" />
                  </div>
                  <div className="col-12 col-md-12 col-lg-8">
                    <div className="main-title pt-4 pb-3">
                      <h1> {title}</h1>
                      <p> {description}</p>
                      <a href="#">
                        <button className="btn btn-primary">More Details</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div >
              )
}
              )
}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default menuitems;