/*



*/

main();

function main() {

  let arr = `body;
  margin: 0;
  padding: 0;
  font-family: 'Comic Sans', 'Helvetica', serif;
  font-size: 18px;
  color: #101010;
  letter-spacing: 0;
  line-height: 25px;
  text-align: left;
@media (min-width: 768px);
  text-align: justify;
.container;
  min-width: 320px;
  margin: 0 auto;
  overflow: hidden;
@media (min-width: 768px);
.container;
  min-width: 768px;
@media (min-width: 1200px);
.container;
  width: 1200px;
.visually-hidden;
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  h3;
  font-size: 19px;
.header;
  padding: 10px;
  color: #fff;
  background-color: #046f8e;
.header__lang;
  display: flex;
  justify-content: flex-end;
.language__link;
  margin-right: 5px;
@media (min-width: 768px);
.language__link;
  margin-right: 10px;
.language__active;
  opacity: 0.5;
.navigation;
  display: block;
.menu;
  display: none;
  padding-left: 0;
  list-style-type: none;
@media (min-width: 768px);
.menu;
  display: flex;
  justify-content: space-around;
.menu a;
  text-decoration: none;
  color: #fff;
.menu a:hover;
  color: #b32424;
.menu a:active;
  color: #a5a2a2;
.main;
  padding: 16px;
  background: linear-gradient(to top right, #f5bfd3, #b0def9);
@media (min-width: 768px);
.main;
  padding: 25px;
.main h1;
  font-size: 35px;
  line-height: 30px;
@media (min-width: 1200px);
.main__general;
  display: flex;
@media (min-width: 768px);
.name;
  display: flex;
  align-items: center;
  justify-content: space-around;
@media (min-width: 1200px);
.name;
  display: block;
  max-width: 300px;
.name__photo;
  display: block;
  margin: 25px auto;
  background-color: transparent;
  border-radius: 25%;
.contacts;
  padding-left: 0;
  width: 250px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 50px;
  list-style-type: none;
.contacts a;
  margin-left: 5px;
  line-height: 28px;
  color: #101010;
  text-decoration: none;
.contacts a:hover;
  color: #b32424;
.contacts a:active;
  color: #a5a2a2;
.contacts li;
  display: flex;
.contacts p;
  margin: 0;
  margin-left: 5px;
  line-height: 28px;
  color: #101010;
  text-decoration: none;
.contacts p:hover;
  color: #101010;
.contacts p:active;
  color: #101010;
.info;
  max-width: 830px;
  margin-left: auto;
  margin-right: auto;
.info__section;
  margin-bottom: 60px;
.info__section:last-child;
  margin-bottom: 0;
.info__section a;
  color: #4b8e50;
  text-decoration: none;
.info__section a:hover;
  color: #b32424;
.info__section a:active;
  color: #a5a2a2;
.portfolio-list;
  padding: 0;
  list-style-type: none;
@media (min-width: 768px);
.portfolio-list;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
.portfolio-list li;
  margin: 20px auto;
  opacity: 0.6;
.portfolio-list li:hover;
  opacity: 1;
.portfolio-list li:active;
  opacity: 0.3;
.portfolio-list img;
  display: block;
  margin: 15px auto;
.skills__table;
  min-width: 300px;
  margin-left: auto;
  margin-right: auto;
  font-size: 18px;
@media (min-width: 768px);
.skills__table;
  min-width: 500px;
  font-size: 21px;
.skills__table td;
  padding: 5px;
  text-align: center;
@media (min-width: 768px);
.skills__table td;
  padding: 10px;
@media (min-width: 768px);
.courses__list;
  padding-left: 20px;
  list-style-type: circle;
@media (min-width: 320px);
.academy__list;
  padding-left: 15px;
  list-style-type: circle;
.work;
  padding-left: 20px;
  list-style-type: circle;
.work__item;
  margin-bottom: 35px;
.work__item ul;
  padding-left: 20px;
.work__item li;
  list-style-type: disc;
.footer;
  padding: 10px;
  color: #fff;
  background-color: #da8ba8;
.footer p;
  text-align: center;
.footer-list;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
  text-align: center;
  list-style-type: none;
.footer-list li;
  padding: 5px;
.footer-list img;
  filter: invert(1);
.footer-list img:hover;
  opacity: 0.6;
.footer-list img:active;
  opacity: 0.2;`.split('\n').filter(Boolean).map(_ => _.trim().replace(';',''));

  const map = arr.reduce((s, el) => {
    if (!s[el]) {
      s[el] = 5;
    }
    s[el]++;

    if (el.startsWith('.')) {
      s[el]++;
      s[el]++;
      s[el]++;
      s[el]++;
    }

    return s;
  }, {});

  console.log(Object.entries(map).sort((a,b) => b[1] - a[1]).map(([k, v]) => v + ' ' + k).join('\n'));

}

// {
//   gridSize: Math.round(16 * $('#canvas').width() / 1024),
//     weightFactor: function (size) {
//   return Math.pow(size, 1.6) * $('#canvas').width() / 1024;
// },
//   fontFamily: 'Times, serif',
//     color: function (word, weight) {
//   return (weight > 9) ? '#8fe' : '#6da';
// },
//   rotateRatio: 0.4,
//     rotationSteps: 3,
//   backgroundColor: '#000'
// }

/*
15 .container
14 @media (min-width: 768px)
15 .language__link
15 .menu
15 .main
15 .name
15 .portfolio-list
15 .skills__table
15 .skills__table td
12 display: flex
10 color: #101010
10 .visually-hidden
10 .header
10 .header__lang
10 .language__active
10 .navigation
10 .menu a
10 .menu a:hover
10 .menu a:active
10 .main h1
10 .main__general
10 .name__photo
10 .contacts
10 .contacts a
10 .contacts a:hover
10 .contacts a:active
10 .contacts li
10 .contacts p
10 .contacts p:hover
10 .contacts p:active
10 .info
10 .info__section
10 .info__section:last-child
10 .info__section a
10 .info__section a:hover
10 .info__section a:active
10 .portfolio-list li
10 .portfolio-list li:hover
10 .portfolio-list li:active
10 .portfolio-list img
10 .courses__list
10 .academy__list
10 .work
10 .work__item
10 .work__item ul
10 .work__item li
10 .footer
10 .footer p
10 .footer-list
10 .footer-list li
10 .footer-list img
10 .footer-list img:hover
10 .footer-list img:active
9 display: block
9 list-style-type: none
9 text-decoration: none
8 margin: 0
8 padding: 0
8 @media (min-width: 1200px)
8 padding: 10px
8 color: #fff
8 justify-content: space-around
8 color: #b32424
8 color: #a5a2a2
8 margin-right: auto
8 margin-left: auto
8 text-align: center
8 padding-left: 20px
8 list-style-type: circle
7 font-size: 18px
7 overflow: hidden
7 padding-left: 0
7 margin-left: 5px
7 line-height: 28px
7 opacity: 0.6
7 padding: 5px
6 body
6 font-family: 'Comic Sans', 'Helvetica', serif
6 letter-spacing: 0
6 line-height: 25px
6 text-align: left
6 text-align: justify
6 min-width: 320px
6 margin: 0 auto
6 min-width: 768px
6 width: 1200px
6 position: absolute
6 clip: rect(0 0 0 0)
6 width: 1px
6 height: 1px
6 margin: -1px
6 h3
6 font-size: 19px
6 background-color: #046f8e
6 justify-content: flex-end
6 margin-right: 5px
6 margin-right: 10px
6 opacity: 0.5
6 display: none
6 padding: 16px
6 background: linear-gradient(to top right, #f5bfd3, #b0def9)
6 padding: 25px
6 font-size: 35px
6 line-height: 30px
6 align-items: center
6 max-width: 300px
6 margin: 25px auto
6 background-color: transparent
6 border-radius: 25%
6 width: 250px
6 margin-bottom: 50px
6 max-width: 830px
6 margin-bottom: 60px
6 margin-bottom: 0
6 color: #4b8e50
6 align-items: flex-end
6 margin: 20px auto
6 opacity: 1
6 opacity: 0.3
6 margin: 15px auto
6 min-width: 300px
6 min-width: 500px
6 font-size: 21px
6 @media (min-width: 320px)
6 padding-left: 15px
6 margin-bottom: 35px
6 list-style-type: disc
6 background-color: #da8ba8
6 justify-content: center
6 filter: invert(1)
6 opacity: 0.2

*/