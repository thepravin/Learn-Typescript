
// type is used for defining custom type 

type Point = {
  x: number;
  y: number;
};

function printCoord(pt: Point): Point {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
  return { x: pt.x, y: pt.y };
}

printCoord({ x: 100, y: 100 });

//************************************************************************ */

type cardNumber = {
  cardNum: number;
};

type cardHolderName = {
  name: string;
};

type cardDetail = cardNumber &
  cardHolderName & {
    cardCVV: number;
  };

let card1: cardDetail = {
  cardNum: 12345678,
  name: "Pravin",
  cardCVV: 1234,
};
