import React from 'react';
import '../App.css'
import {Cell} from "../models/Cell";


export interface CellProps{
    cell: Cell
}
const CellComponent:React.FC<CellProps> = ({cell}) => {
    return (
        <div className = {['cell', cell.color].join(' ')}>

        </div>
    );
};

export default CellComponent;
