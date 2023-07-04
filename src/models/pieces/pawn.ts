import {Names, Piece} from "./piece";
import {Cell} from "../Cell";
import {Colors} from "../Colors";
import BlackPiece from "../../assets/blackPieces/peshka.png";
import WhitePiece from "../../assets/whitePieces/peshka.png";

export class Pawn extends Piece{
    constructor(cell: Cell, color: Colors) {
        super(cell, color);
        this.image = color === Colors.BLACK?BlackPiece: WhitePiece;
        this.name = Names.PAWN;
    }



        pawnMove(target: Cell): boolean{
            return true;
        }
    canMove(target: Cell): boolean {
        return super.canMove(target) && this.pawnMove(target)


    }
}
