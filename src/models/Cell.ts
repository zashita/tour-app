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
}
