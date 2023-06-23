import React from 'react';
import '../App.css'
import {Board} from "../models/Board";
import CellComponent from "./CellComponent";

export interface BoardProps {
    board: Board;
    setBoard: (newBoard: Board) => void;

}
const BoardComponent:React.FC<BoardProps> = ({board, setBoard}) => {
    return (
        <div className={'board'}>
            {board.cells.map((row, index)=>{
                return(
                    <React.Fragment key = {index}>
                        {row.map((cell)=>{
                            return(
                                <CellComponent cell = {cell}/>
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
