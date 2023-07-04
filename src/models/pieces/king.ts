import {Colors} from "../Colors";
import BlackPiece from "../../assets/blackPieces/king.png";
import WhitePiece from "../../assets/whitePieces/king.png";
import {Names, Piece} from "./piece";
import {Cell} from "../Cell";

export class King extends Piece{
    constructor(cell: Cell, color: Colors) {
        super(cell, color);
        this.image = color === Colors.BLACK?BlackPiece: WhitePiece;
        this.name = Names.KING;
    }
}
