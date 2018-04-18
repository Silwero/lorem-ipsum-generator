import React from 'react';

const loremIpsum = require('lorem-ipsum');

const allElements = () => {
  let items = {};

  let generateRandomKey = () => {
    return Math.random().toString(36).substr(2, 9);
  }

  items.h1 = <h1 key={generateRandomKey()}>{loremIpsum({
    units: 'sentences',
    sentenceLowerBound: 3,
    sentenceUpperBound: 10
  })}</h1>

  items.h2 = <h2 key={generateRandomKey()}>{loremIpsum({
    units: 'sentences',
    sentenceLowerBound: 3,
    sentenceUpperBound: 10
  })}</h2>

  items.h3 = <h3 key={generateRandomKey()}>{loremIpsum({
    units: 'sentences',
    sentenceLowerBound: 3,
    sentenceUpperBound: 10
  })}</h3>

  items.h4 = <h4 key={generateRandomKey()}>{loremIpsum({
    units: 'sentences',
    sentenceLowerBound: 3,
    sentenceUpperBound: 10
  })}</h4>

  items.h5 = <h5 key={generateRandomKey()}>{loremIpsum({
    units: 'sentences',
    sentenceLowerBound: 3,
    sentenceUpperBound: 10
  })}</h5>

  items.h6 = <h6 key={generateRandomKey()}>{loremIpsum({
    units: 'sentences',
    sentenceLowerBound: 3,
    sentenceUpperBound: 10
  })}</h6>

  items.paragraph1 = <p key={generateRandomKey()}>
    Lorem ipsum dolor sit amet? <strong>strong text example</strong>. Expedita facilis accusamus sed esse aperiam, maiores libero modi, ab maxime aliquid, fugiat optio. Pariatur non asperiores, sint, <i>tenetur sed voluptatum illum beatae</i>.
  </p>

  items.paragraph2 = <p key={generateRandomKey()}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, sit quia quas, veniam id et laudantium necessitatibus? <a href="http://example.com">link text example</a>. Expedita facilis accusamus sed esse aperiam, maiores <em>libero modi</em>, ab maxime aliquid, fugiat optio. Pariatur non asperiores.
  </p>

  items.paragraph3 = <p key={generateRandomKey()}>
    Lorem ipsum dolor sit amet<sup>sup text</sup>, consectetur adipisicing elit. Laboriosam est placeat culpa<sub>sub text</sub>. Nostrum natus ad alias, architecto beatae omnis cum illum deserunt <abbr title="Abbreviation">ABBR</abbr> molestias quidem earum magnam, consectetur sint!
  </p>

  items.img = <img key={generateRandomKey()} src={"http://placehold.it/600x300"} alt="Alt text"/>

  const randomPaaragraph = () => (
    <p key={generateRandomKey()}>
      {loremIpsum({
        units: 'sentences',
        sentenceLowerBound: 20,
        sentenceUpperBound: 60
      })}
    </p>
  );

  items.ul = <ul key={generateRandomKey()}>
    <li>Lorem ipsum dolor sit amet, 572<sup>5</sup> consectetur adipisicing elit. Aspernatur, tenetur.</li>
    <li>Lorem ipsum dolor sit amet, <em>consectetur adipisicing elit.</em> Quisquam velit saepe reprehenderit corporis excepturi quod sit ut explicabo fuga illo placeat nemo ipsam suscipit eum maxime consectetur eos, nam cumque.</li>
    <li>{
      loremIpsum({
        units: 'sentences',
        sentenceLowerBound: 3,
        sentenceUpperBound: 20
      })
    }</li>
    <li>Lorem ipsum dolor sit amet, consectetur<sub>"subscript" text</sub> adipisicing elit. Quibusdam cumque reiciendis fuga amet quae magni, cum, eos nobis iusto alias. Non, ab reiciendis eaque vero neque similique aut quaerat. Sint?</li>
  </ul>


  items.ol = <ol key={generateRandomKey()}>
    <li>Lorem <b>ipsum dolor sit amet</b>, consectetur <abbr title="Abbreviation">ABBR</abbr> adipisicing elit. Quos, quas!</li>
    <li>{
      loremIpsum({
        units: 'sentences',
        sentenceLowerBound: 3,
        sentenceUpperBound: 30
      })
    }</li>
    <li><i>Lorem ipsum dolor sit amet, <a href="http://example.com">consectetur adipisicing</a> elit. Eligendi ipsam accusamus cum accusantium adipisci nulla itaque, <strong>molestiae earum</strong> dolores nemo?</i></li>
    <li>{
      loremIpsum({
        units: 'sentences',
        sentenceLowerBound: 3,
        sentenceUpperBound: 10
      })
    }</li>
  </ol>

  items.blockquote = <blockquote key={generateRandomKey()}>
    {
      loremIpsum({
        units: 'sentences',
        sentenceLowerBound: 20,
        sentenceUpperBound: 50
      })
    }
  </blockquote>

  return [
    items.h1,
    items.paragraph1,
    randomPaaragraph(),
    items.h2,
    items.paragraph2,
    items.ul,
    items.h3,
    items.paragraph3,
    items.h4,
    randomPaaragraph(),
    items.ol,
    randomPaaragraph(),
    items.blockquote,
    randomPaaragraph(),
    items.img,
    randomPaaragraph(),
    items.h5,
    randomPaaragraph(),
    items.h6,
    randomPaaragraph(),
    randomPaaragraph()
  ];
}

export default allElements;
