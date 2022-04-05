import allGiftCards from "./data/db";
import React from "react";

function App() {
  return (
    <div className="App container mt-5 d-flex w-100 justify-content-center align-items-center">
      
      <div className="row m-0">
      {allGiftCards.map(x => 
      <div className="card col-md-4 col-lg-3 m-1  bg-primary">
        <div className="text-white mb-3" >
          <div className="card-header">ID : {x.id}</div>
          <div className="card-body">
            <h5 className="card-title">{x.title}</h5>
            <p className="card-text">Currencies</p>
            <ul class="list-group list-group-flush" style={
              {
                display : "flex",
                flexDirection : "row",
                flexWrap : "wrap"
              }
            }>
            {
              x.currencies.map(curr => {       
               return  <small className="mx-2">{curr}</small>
              })
            }
            </ul>
          </div>
        </div>
        </div>
        )}
      </div>
      
    </div>
  );
}

export default App;
