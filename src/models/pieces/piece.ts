import image from '../../assets/blackPieces/kon.png'
import {Cell} from "../Cell";
import {Colors} from "../Colors";
export enum Names{
    'KING' = 'король',
    'QUEEN' = 'королева',
    'KNIGHT' = 'конь',
    'BISHOP' = 'слон',
    'PAWN' = 'пешка',
    'ROOK' = 'ладья',

    'PIECE' = 'фигура'

}

export class Piece{
    name: Names
    image: typeof image | null;
    cell: Cell
    color: Colors

    id: number;

    constructor(cell: Cell, color: Colors) {
        this.cell = cell;
        this.cell.piece = this;
        this.color = color;
        this.name = Names.PIECE;
        this.image = null;
        this.id = Math.random()
    }

    canMove(target: Cell): boolean{
        if(target.piece?.color === this.color || target.piece?.name === Names.KING){
            return false
        } else{
            return true;

        }
    }

    movePiece(target: Cell){

    }


}
