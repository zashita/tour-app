import {Colors} from "./Colors";
import {Piece} from "./pieces/piece";
import {Board} from "./Board";

export class Cell{
    readonly x: number;
    readonly y: number;
    readonly color: Colors;
    piece: Piece | null;
    available: boolean;
    board: Board;
    id: number;

    constructor(board: Board, x: number, y: number, color: Colors,piece: Piece| null) {
        this.board = board;
        this.x = x;
        this.y = y;
        this.color = color;
        this.piece = piece;
        this.id = Math.random()
        this.available = false
    }

    canMoveVertical(target: Cell): boolean{
        if(target.x !== this.x){
            return false
        }else{
            const max = Math.max(this.y, target.y)
            const min = Math.min(this.y, target.y)
            for (let y = min + 1; y < max - 1; y++){
                if (this.board.cells[this.x][y].piece !== null){
                    return false
                    break;
                }else{
                    return true
                }
            }

        }
    }

    movePiece(target: Cell){
        if(this.piece && this.piece.canMove(target) && this.canMoveVertical(target)){
            // this.piece.movePiece(target)
            target.piece = this.piece
            this.piece = null;




        }
    }
}
