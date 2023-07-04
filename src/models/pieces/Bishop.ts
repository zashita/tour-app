import {Names, Piece} from "./piece";
import {Cell} from "../Cell";
import {Colors} from "../Colors";
import BlackPiece from "../../assets/blackPieces/slon.png";
import WhitePiece from "../../assets/whitePieces/slon.png";

export class Bishop extends Piece{
    constructor(cell: Cell, color: Colors) {
        super(cell, color);
        this.image = color === Colors.BLACK?BlackPiece: WhitePiece;
        this.name = Names.BISHOP;
    }
}
