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

}

export class Piece{
    name: Names
    image: typeof image;
    cell: Cell
    color: Colors


}
