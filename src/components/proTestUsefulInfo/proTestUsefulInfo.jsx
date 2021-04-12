


export default function ProTestUsefulInfo() {
  return (
    <section className="container proTestUsefulInfo">
      {/* <picture>
         <source
            srcset="
              ../images/UsefulInfo/pic.jpg 1x,
              
              ../../images/UsefulInfo/pic@2.jpg 2x,
              ../../images/UsefulInfo/pic@3.jpg 3x
            "
            media="(max-width: 1280px)"
            type="image"
          />
      </picture> */}
      <div className="containerinside">
      <h2 className="listNameH">Useful literature</h2>
      <ol className="sectionList">
        <li>Testing dot.com Savin.</li>
        <li>
          A mental hospital in the hands of <br />
          patients.
        </li>
        <li>Scrum. J. Sutherland.</li>
        </ol>
      </div>
      <div className="containerinside">
      <h2 className="listNameH vectorH">Useful<br />resources</h2>
      <ol className="sectionList">
        <li><a href="https://dou.ua/" className="linkOl">dou.ua</a></li>
        <li><a href="https://habr.com/ru/" className="linkOl">Habr</a></li>
        <li><a href="https://www.facebook.com/" className="linkOl">facebook.com/QA</a></li>
        <li><a href="https://goit.ua/" className="linkOl">goit.ua</a></li>
        </ol>
        </div>
    </section>
  );
}
