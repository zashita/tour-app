import React from 'react';
import '../App.css'
import {Cell} from "../models/Cell";


export interface CellProps{
    cell: Cell
    selectedSell: Cell | null;
    setSelectedCell: (cell: Cell) => void;
}
const CellComponent:React.FC<CellProps> = ({cell, setSelectedCell, selectedSell}) => {
    const selected: boolean = selectedSell?.x === cell.x && selectedSell.y === cell.y
    return (
        <div
            className = {['cell', cell.color, selected? 'selected': '', cell.available && cell.piece
                && cell.piece.color !== selectedSell?.piece?.color&& selectedSell?
                'piece-available': ''].join(' ')}
            onClick={() => setSelectedCell(cell)}
        >
            {selectedSell && cell.available && !cell.piece && <div className={'available'}/>}
            {cell.piece?.image && <img src={cell.piece.image} className={'pieceLogo'}/>}
        </div>
    );
};

export default CellComponent;
