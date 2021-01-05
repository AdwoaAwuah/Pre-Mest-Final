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
                  The virus that causes COVID-19 is mainly transmitted through
                  droplets generated when an infected person coughs, sneezes, or
                  exhales. These droplets are too heavy to hang in the air, and
                  quickly fall on floors or surfaces.
               </p>
                <p>
                  You can be infected by breathing in the virus if you are within
                  close proximity of someone who has COVID-19, or by touching a
                  contaminated surface and then your eyes, nose or mouth.
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
          <div className={["section-head text-center wide-lg"].join(" ")}>
            
            <h2 className="title">
              Prevention <br className="d-sm-none" /> &amp; advice
            </h2>
            <p>
              There is currently no vaccine to prevent coronavirus disease 2019
              (COVID-19).{" "}
              <strong>
                The best way to prevent illness is to avoid being exposed to this
                virus.
              </strong>{" "}
              Stay aware of the latest information on the COVID-19 outbreak,
              available on the WHO website and through your national and local
              public health authority.
            </p>
          </div>
          <div className="section-content">
            <div className={["row g-gs gy-sm-m"].join(" ")}>
              <div className={["col-lg-3 col-sm-6"].join(" ")}>
                <div className="box3">
                  <div className="box3-gfx">
                    {" "}
                    <img src="/advice-a.png" alt="" />
                  </div>
                  <div className="box3-content">
                    <h5 className="title">Wash your hands frequently</h5>
                    <p>
                      Regularly and thoroughly clean your hands with an
                      alcohol-based hand rub or wash them with soap and water for
                      at least 20 seconds.
                    </p>
                  </div>
                </div>
              </div>
              <div className={["col-lg-3 col-sm-6"].join(" ")}>
                <div className="box3">
                  <div className="box3-gfx">
                    {" "}
                    <img src="/advice-b.png" alt="" />
                  </div>
                  <div className="box3-content">
                    <h5 className="title">Maintain social distancing</h5>
                    <p>
                      Maintain at least 1 metre (3 feet) distance between yourself
                      & anyone who is coughing or sneezing. If you are too close,
                      get chance to infected.
                    </p>
                  </div>
                </div>
              </div>
              <div className={["col-lg-3 col-sm-6"].join(" ")}>
                <div className="box3">
                  <div className="box3-gfx">
                    {" "}
                    <img src="/advice-c.png" alt="" />
                  </div>
                  <div className="box3-content">
                    <h5 className="title">Avoid touching face</h5>
                    <p>
                      Hands touch many surfaces and can pick up viruses. So, hands
                      can transfer the virus to your eyes, nose or mouth and can
                      make you sick.
                    </p>
                  </div>
                </div>
              </div>
              <div className={["col-lg-3 col-sm-6"].join(" ")}>
                <div className="box3">
                  <div className="box3-gfx">
                    {" "}
                    <img src="/advice-d.png" alt="" />
                  </div>
                  <div className="box3-content">
                    <h5 className="title">Practice respiratory hygiene</h5>
                    <p>
                      Maintain good respiratory hygiene as covering your mouth &
                      nose with your bent elbow or tissue when cough or sneeze.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        
      

  );
};


export default section_1;