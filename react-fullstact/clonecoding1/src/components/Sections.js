import React from "react";
import styled from "styled-components";
import Img1 from "../asset/img/tablesetting.jpg";
import Img2 from "../asset/img/tablesetting2.jpg";

const SectionSt = styled.section`
  display: flex;
  margin: 0 auto;
  width: 1100px;
  padding-top: 64px;
  padding-bottom: 64px;
  .tag-st {
    color: #000 !important;
    background-color: #f1f1f1 !important;
  }
  input {
    padding: 16px 0;
    display: block;
    border: none;
    border-bottom: 1px solid #ccc;
    width: 100%;
    font-size: 15px;
  }
  .btn-style {
    color: #000 !important;
    background-color: #f1f1f1 !important;
    border: none;
    display: inline-block;
    padding: 8px 16px;
    vertical-align: middle;
    overflow: hidden;
    text-decoration: none;
    color: inherit;
    background-color: inherit;
    text-align: center;
    cursor: pointer;
    white-space: nowrap;
    margin: 16px 0;
  }
  h1.title {
    font-family: "Playfair Display";
    letter-spacing: 5px;
    text-align: center;
    font-weight: 400;
    margin: 10px 0;
    font-size: 36px;
  }
  > div {
    width: 50%;
  }
  img {
    width: calc(100% - 24px);
    opacity: 0.75;
    padding: 12px 24px !important;
  }

  .content-box {
    padding: 12px 24px !important;
    h5.sub-title {
      font-family: "Playfair Display";
      letter-spacing: 5px;
      text-align: center;
    }
    p.content-txt {
      font-size: 18px;
      line-height: 1.5;
      margin: 18px 0;
      padding: 0 30px 0 0;
    }
    .content-sub-txt {
      color: #757575;
      font-size: 18px;
    }
    &:last-of-type h1 {
      text-align: left;
    }
    
  }
`;

const Sections = () => {
  return (
    <>
      <SectionSt>
        <div>
          <img src={Img1} alt="햄버거" />
        </div>
        <div class="content-box">
          <h1 class="title">About Catering</h1>
          <br />
          <h5 class="sub-title">Tradition since 1889</h5>
          <p class="content-txt">
            The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor
            sit amet, consectetur adipiscing elit consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.We only use <span class="tag-st">seasonal</span>{" "}
            ingredients.
          </p>
          <p class="content-sub-txt">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum consectetur adipiscing
            elit, sed do eiusmod temporincididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </SectionSt>
      <SectionSt>
        <div class="content-box">
          <h1 class="title">Our Menu</h1>
          <br />

          <h4>Bread Basket</h4>
          <p class="sub-title-grey">
            Assortment of fresh baked fruit breads and muffins 5.50
          </p>
          <br />

          <h4>Honey Almond Granola with Fruits</h4>
          <p class="sub-title-grey">
            Natural cereal of honey toasted oats, raisins, almonds and dates
            7.00
          </p>
          <br />

          <h4>Belgian Waffle</h4>
          <p class="sub-title-grey">
            Vanilla flavored batter with malted flour 7.50
          </p>
          <br />

          <h4>Scrambled eggs</h4>
          <p class="sub-title-grey">
            Scrambled eggs, roasted red pepper and garlic, with green onions
            7.50
          </p>
          <br />

          <h4>Blueberry Pancakes</h4>
          <p class="sub-title-grey">
            With syrup, butter and lots of berries 8.50
          </p>
        </div>
        <div>
          <img src={Img2} alt="햄버거" />
        </div>
      </SectionSt>
      <SectionSt style={{display:"block"}}>
        <h1 class="title">Contact</h1>
        <br />
        <p>
          We offer full-service catering for any event, large or small. We
          understand your needs and we will cater the food to satisfy the
          biggerst criteria of them all, both look and taste. Do not hesitate to
          contact us.
        </p>
        <p class="text-blue-grey">
          <b>Catering Service, 42nd Living St, 43043 New York, NY</b>
        </p>
        <p>
          You can also contact us by phone 00553123-2323 or email
          catering@catering.com, or you can send us a message here:
        </p>
        <form action="/action_page.php" target="_blank">
          <p>
            <input
              class="input-style"
              type="text"
              placeholder="Name"
              required=""
              name="Name"
            />
          </p>
          <p>
            <input
              class="input-style"
              type="number"
              placeholder="How many people"
              required=""
              name="People"
            />
          </p>
          <p>
            <input
              class="input-style"
              type="datetime-local"
              placeholder="Date and time"
              required=""
              name="date"
              value="2020-11-16T20:00"
            />
          </p>
          <p>
            <input
              class="input-style"
              type="text"
              placeholder="Message \ Special requirements"
              required=""
              name="Message"
            />
          </p>
          <p>
            <button class="btn-style" type="submit">
              SEND MESSAGE
            </button>
          </p>
        </form>
      </SectionSt>
    </>
  );
};

export default Sections;
