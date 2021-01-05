import React from "react";
import "./About.css"
import ReactPlayer from 'react-player'

const section_1 = (props) => {
  return (
    
      <div className="container">
        <div className="section-content">
          <div className={["row g-gs justify-content-between"].join(" ")}>
         
            <div className="col-lg-7">
              <div className="text-block">
                <h5 className="subtitle">About the disease</h5>
                <h2 className="title">
                  Coronavirus <br className="d-sm-none" />
                  (COVID-19)
                </h2>
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=7z0kzYpuqhw"
                    controls
                    width = "896px"
                    height = "504px"
                />
                <p className="lead">
                  <strong>
                    COVID-19 is a new illness that can affect your lungs and
                    airways.
                  </strong>{" "}
                  It's caused by a virus called coronavirus. It was discovered
                  in December 2019 in Wuhan, Hubei, China.
                </p>
                <p>
                  Common signs of infection include respiratory symptoms, fever,
                  cough, shortness of breath and breathing difficulties. In more
                  severe cases, infection can cause pneumonia, severe acute
                  respiratory syndrome, kidney failure and even death.
                </p>
                <p>
                  Standard recommendations to prevent infection spread include
                  regular hand washing, covering mouth and nose when coughing
                  and sneezing, thoroughly cooking meat and eggs. Avoid close
                  contact with anyone showing symptoms of respiratory illness
                  such as coughing and sneezing.
                </p>
                <h5 className="subtitle">How coronavirus is spread</h5>
          <h2 className="title">
            Transmission of <br className="d-sm-none" /> COVID-19
          </h2>
          <p>
            Because it's a new illness, we do not know exactly how coronavirus
            spreads from person to person. Similar viruses are spread in cough
            droplets.
          </p>
          
              </div>
              
            </div>
            <div className="section-content">
          <div className={["row g-gs justify-content-center"].join(" ")}>
            <div className={["col-sm-10 col-md-8 col-lg-4"].join(" ")}>
              
                <div className="box-gfx">
                  {" "}
                  <img src="/spread-a.png" alt="" />
                </div>
                <div className="box-content">
                  <h4 className="title">
                    Person-to-person spread as close contact with infected
                  </h4>
                  <p>
                    The coronavirus is thought to spread mainly from person to
                    person. This can happen between people who are in close
                    contact with one another.
                  </p>
                </div>
              
            </div>
            </div>
            </div>
            <div className={["col-sm-10 col-md-8 col-lg-4"].join(" ")}>
              
                <div className="box-gfx">
                  {" "}
                  <img src="/spread-b.png" alt="" />
                </div>
                <div className="box-content">
                  <h4 className="title">
                    Touching or contact with infected surfaces or objects
                  </h4>
                  <p>
                    A person can get COVID-19 by touching a surface or object
                    that has the virus on it and then touching their own mouth,
                    nose, or possibly their eyes.
                  </p>
                </div>
            </div>
            <div className={["col-sm-10 col-md-8 col-lg-4"].join(" ")}>
              
                <div className="box-gfx">
                  {" "}
                  <img src="/spread-c.png" alt="" />
                </div>
                <div className="box-content">
                  <h4 className="title">
                    Droplets that from infected person coughs or sneezes
                  </h4>
                  <p>
                    The coronavirus is thought to spread mainly from person to
                    person. This can happen between people who are in close
                    contact with one another.
                  </p>
                </div>
            </div>
            </div>
          </div>
        </div>
      

  );
};


export default section_1;