import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
     ${reset};
    
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

html,
body {
    font-family: Verdana, sans-serif;
    font-size: 15px;
    line-height: 1.5;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: "Segoe UI", Arial, sans-serif;
    font-weight: 400;
    margin: 10px 0;
}

h3 {
    font-size: 24px;
}

txt-grey{
    opacity: 0.7;
}

p{
    margin: 15px 0;
}
.display-flex {
    display: flex !important;
}

.position-relative {
    position: relative;
}

.position-absolute {
    position: absolute;
}

.position-fixed {
    position: fixed;
}

.nav-shadow {
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);

}

.justify-space-between {
    justify-content: space-between;
}

.letter-spacing-4 {
    letter-spacing: 4px;
}

.normal-padding {
    padding: 8px 16px !important;
}

b {
    font-weight: bold;
}

.text-center {
    text-align: center;
}


.margin-auto {
    margin: 0 auto;
}

.max-width {
    width: 1500px;
}


.title {
    margin: 16px auto;
    font-size: 24px;
    padding: 32px 0;
    border-bottom: 1px solid #ccc !important;
    border-color: #f1f1f1 !important;
}

.normal-padding-16 {
    padding-top: 16px !important;
    padding-bottom: 16px !important;
}

.topleft-title {
    background: #000;
    text-align: center;

    color: #fff;
}


.img-wrap {
    width: 100vw;
    max-width: 1500px;
    margin: 0 auto;
    gap: 16px;
    flex-wrap: wrap;
}

.img-con {
    width: 24%;
}

.img-con img {
    width: 100%;
    aspect-ratio: 359/239;
}
.person-list{
    width: 24%;
}
.person-wrap{
    gap: 16px;
}
.person-img-con img{
    width: 100%;
   
    aspect-ratio: 359/239; 
}


.btn-style{
    color: #000!important;
    background-color: #f1f1f1!important;
    display: block;
    width: 100%;
    border: none;
    border: none;
    display: inline-block;
    padding: 8px 16px;
    font-size: 15px;
    overflow: hidden;
    text-decoration: none;
    color: inherit;
    background-color: inherit;
    text-align: center;
    cursor: pointer;
    white-space: nowrap;

}
.btn-style:hover{
    color: #000!important;
    background-color: #666!important;
}

.input-style{
    border: 1px solid #ccc!important;
    padding: 8px;
    display: block;
    border: none;
    border-bottom: 1px solid #ccc;
    width: 100%;
    font-size: 16px;
    margin: 16px 0 ;
}
.send-btn-style{
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
    background: #000;
    color: #fff;
    font-weight: bold;
}

.last-img{
    display: block;
}
footer{
    margin: 8px auto 0;
    background: #000;
    text-align: center;
    color: #fff;
    font-weight: bold;
}

`;

 export default GlobalStyles;