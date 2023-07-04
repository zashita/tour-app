import React, {useEffect, useState} from 'react';
import '../App.css'
import {Board} from "../models/Board";
import CellComponent from "./CellComponent";
import {Cell} from "../models/Cell";

export interface BoardProps {
    board: Board;
    setBoard: (newBoard: Board) => void;

}
const BoardComponent:React.FC<BoardProps> = ({board, setBoard}) => {

    const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

    const click = (cell: Cell) => {
        if(cell.piece){
            setSelectedCell(cell)
        }
        if(selectedCell && selectedCell.piece?.canMove(cell) && cell !== selectedCell){
            selectedCell.movePiece(cell)
            setSelectedCell(null)
            setBoard(board.updateBoard())

        }
        if(selectedCell && cell === selectedCell){
            setSelectedCell(null)
        }
    }
    useEffect(()=>{
        highlightCells()
    }, [selectedCell])

    const highlightCells = () => {
        if (selectedCell){
            board.highlightCells(selectedCell)
            setBoard(board.updateBoard())
        }

    }

    return (
        <div className={'board'}>
            {board.cells.map((row, index)=>{
                return(
                    <React.Fragment key = {index}>
                        {row.map((cell)=>{
                            return(
                                <CellComponent cell = {cell}
                                               selectedSell = {selectedCell}
                                                setSelectedCell = {click}/>
                            )
                        })}
                    </React.Fragment>
                )
            })
            }
        </div>
    );
};

export default BoardComponent;
