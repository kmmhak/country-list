import Button from './Button';
import * as MdIcons from "react-icons/md";

const Pagination = ({
    nextPage, 
    previousPage, 
    canPreviousPage, 
    canNextPage,
    pageIndex,
    pageOptions
}) => {

    return(
        <div className='pagination'>
            {pageIndex + 1} - {pageOptions.length}

            <Button 
                disabled={!canPreviousPage}
                onClick={previousPage} 
                icon={<MdIcons.MdOutlineKeyboardArrowLeft />}
                
                />
            <Button 
                onClick={nextPage} 
                icon={<MdIcons.MdOutlineKeyboardArrowRight />}
                disabled={!canNextPage}
                />
            </div>
    )

}

export default Pagination;