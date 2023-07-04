import {Cell} from "./Cell";
import {Colors} from "./Colors";
import {Pawn} from "./pieces/pawn";
import {Knight} from "./pieces/knight";
import {Rook} from "./pieces/rook";
import {Bishop} from "./pieces/Bishop";
import {Queen} from "./pieces/queen";
import {King} from "./pieces/king";

export class Board{
    cells: Cell[][] = []
    public initCells(){
        for (let i = 0; i < 8; i++){
            const row: Cell[] = []
            for (let j = 0; j < 8; j++){
                if((i + j)% 2 === 0){
                    row.push(new Cell(this, j, i, Colors.WHITE, null)) // white
                } else{
                    row.push(new Cell(this, j, i, Colors.BLACK, null)) // black
                }
            }
            this.cells.push(row)
        }
}
    public highlightCells(cell: Cell){
        for (let i = 0; i < 8; i++){
            const row = this.cells[i];
            for (let j = 0; j < row.length; j++){
                const target = row[j];
                target.available = !!cell.piece?.canMove(target)
            }

        }
    }

    public updateBoard = () =>{
        const newBoard = new Board();
        newBoard.cells = this.cells
        return newBoard;
    }

    public getCell(x: number, y: number){
        return this.cells[y][x]
    }

    public addPawns(){
        for (let i = 0; i < 8; i++){
            new Pawn(this.getCell(i, 1), Colors.BLACK)
            new Pawn(this.getCell(i, 6), Colors.WHITE)
        }
    }

    public addKnights(){
        for (let i = 1; i < 7; i += 5){
            new Knight(this.getCell(i, 0), Colors.BLACK)
            new Knight(this.getCell(i, 7), Colors.WHITE)
        }
    }

    public addKings(){
        new King(this.getCell(4,0), Colors.BLACK)
        new King(this.getCell(4,7), Colors.WHITE)
    }

    public addQueens(){
        new Queen(this.getCell(3,0), Colors.BLACK)
        new Queen(this.getCell(3,7), Colors.WHITE)
    }

    public addRooks(){
        for (let i = 0; i < 8; i += 7){
            new Rook(this.getCell(i, 0), Colors.BLACK)
            new Rook(this.getCell(i, 7), Colors.WHITE)
        }
    }

    public addBishops(){
        for (let i = 2; i < 6; i += 3){
            new Bishop(this.getCell(i, 0), Colors.BLACK)
            new Bishop(this.getCell(i, 7), Colors.WHITE)
        }
    }
    public addPieces(){
        this.addKnights()
        this.addRooks()
        this.addPawns()
        this.addQueens()
        this.addBishops()
        this.addKings()
    }
}
