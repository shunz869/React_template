import React from 'react';

 const PreOrder = (props) => {
  
  return(
    <div className="col-12 col-md-9 col-lg-9">
      <h4>Pre-Order</h4>
      <div className="card" style={{border:0}}>
        <div className="row no-gutters" style={{marginTop:30,marginBottom:30}}>
          <div className="col-md-6">
            <img src="https://via.placeholder.com/390x330" className="img-fluid" alt="124" />
          </div>
          <div className="col-md-6" >
            <div className="card-body" style={{paddingTop:0}}>
              <h5 className="card-title">Card title</h5>
              <p className="card-text">dasdad</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card" style={{border:0}}>
      <div className="row no-gutters" style={{marginTop:30,marginBottom:30}}>
        <div className="col-md-6">
          <img src="https://via.placeholder.com/390x330" className="img-fluid" alt="124" />
        </div>
        <div className="col-md-6" >
          <div className="card-body" style={{paddingTop:0}}>
            <h5 className="card-title">Card title</h5>
            <p className="card-text">dasdad</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default PreOrder