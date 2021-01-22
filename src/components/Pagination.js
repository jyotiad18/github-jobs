import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import '../css/Pagination.css';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { selectJobs, setNextPage, setPreviousPage, setPage } from '../reducers/jobsSlice.js';

function Pagination() {
	const {currentPage, pages } = useSelector(selectJobs);
	const dispatch = useDispatch();

	const onClickPage = (e) => { 
		dispatch(setPage({
			currentPage: parseInt(e.target.innerHTML)
		}))
	}

	return (
		<div className="pagination">
			<div className="pagination__content">
				<button className="page arrow" disabled={currentPage <= 1} onClick={() => { dispatch(setPreviousPage())}}>
					<ChevronLeftIcon />
				</button>				
				<section>
					{pages.length === 0 ? <button className={"page " + (currentPage === 1 ? "active" : " ")} onClick={onClickPage}>1</button> : null }
					{ pages.length <= 5 && pages.map((p, i) => (					     
						<button key = {i} className={"page " + (currentPage === p ? "active" : " " )} onClick={onClickPage}>{p}</button>
					))					
					}
				{
						pages && pages.length > 5 ? 																				
								<div>
								{
									currentPage <= 3 ?
									<section>
									<button className={"page " + (currentPage === 1 ? "active" : " " )} onClick={onClickPage}>1</button>
									<button className={"page " + (currentPage === 2 ? "active" : " " )} onClick={onClickPage}>2</button>
									<button className={"page " + (currentPage === 3 ? "active" : " " )} onClick={onClickPage}>3</button>
									<div className="ellipsis">
          							 ···
        							</div>
									<button className={"page " + (currentPage === pages.length ? "active" : " " )} onClick={onClickPage}>{ pages.length }</button>
									</section>
									: null
								}							
								{
									currentPage > 3 && currentPage < pages.length - 2 ?
									<section>
									<button className="page" onClick={onClickPage}>1</button>									
									<div className="ellipsis">
          							 ···
        							</div>
									<button className="page active" onClick={onClickPage}>{ currentPage }</button>
									<div className="ellipsis">
          							 ···
        							</div>
									<button className="page" onClick={onClickPage}>{ pages.length }</button>
									</section>
								   : null
								}
								{
									currentPage >= pages.length - 2 ?
									<section>
									<button className="page" onClick={onClickPage}>1</button>									
									<div className="ellipsis">
          							 ···
        							</div>
									<button className={"page " + (currentPage === pages.length - 2 ? "active" : " " )} onClick={onClickPage}>{pages.length - 2}</button>
									<button className={"page " + (currentPage === pages.length - 1 ? "active" : " " )} onClick={onClickPage}>{pages.length - 1}</button>
									<button className={"page " + (currentPage === pages.length ? "active" : " " )} onClick={onClickPage}>{pages.length}</button>
									</section>
								   : null
								}
								</div>																						
						: null
					}
				</section>
				<button className="page arrow" disabled={currentPage === pages.length} onClick={() => { dispatch(setNextPage())}}>
					<ChevronRightIcon />
				</button>
			</div>
		</div>	
	)
}

export default Pagination;
