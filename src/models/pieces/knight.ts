import {Names, Piece} from "./piece";
import {Cell} from "../Cell";
import {Colors} from "../Colors";
import WhitePiece from "../../assets/whitePieces/kon.png"
import BlackPiece from "../../assets/BlackPieces/kon.png"

export class Knight extends Piece{
    constructor(cell: Cell, color: Colors) {
        super(cell, color);
        this.image = color === Colors.BLACK?BlackPiece: WhitePiece;
        this.name = Names.KNIGHT;
    }
}
