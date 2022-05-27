import React from "react";
import Data from "../data";
const Section = () => {
  const { project } = Data;
  const { about } = Data;
  return (
    <div className="img-wrap display-flex justify-space-between">
      <div className="title max-width ">Projects</div>

      {project.map((v, i) => {
        return (
          <div className="img-con position-relative" key={i}>
            <div className="topleft-title position-absolute normal-padding">
              {v.subject}
            </div>
            <img src={v.img} alt="집" />
          </div>
        );
      })}
      <section>
        <div class="title max-width ">About</div>
        <div class="notice normal-padding-16 max-width margin-auto">
          {about.content}
        </div>
        <div class="person-wrap display-flex justify-space-between max-width margin-auto">
          <div class="person-list">
            <div class="person-img-con">
              <img src="./img/team1.jpg" alt="" />
            </div>

            {/* <div class="introduce-list">
              <h3>John Doe</h3>
              <p class="txt-grey ">CEO &amp; Founder</p>
              <p>
                Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
                sodales pellentesque elementum.
              </p>
              <p>
                <button class="btn-style">Contact</button>
              </p>
            </div> */}
            <div class="person-wrap display-flex justify-space-between max-width margin-auto">
              {about.member.map((v, i) => {
                return (
                  <div class="person-list">
                    <div class="person-img-con">
                      <img src={v.img} alt="" />
                    </div>
                    <div className="introduce-list" key={i}>
                      <h3>{v.name}</h3>
                      <p className="txt-grey">{v.position}</p>
                      <p>{v.desc}</p>
                      <p>
                        <button class="btn-style">Contact</button>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section;
