import './settings.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Settings = () => {

	const ThemeColors = [
		'#ffcccc', '#6272a4', '#f1fa8c', 
		'#8be9fd', '#ffb86c', '#ff79c6', 
		'#bd93f9', '#ff5555'
	  ]
	
    const user = useSelector((state) => state.auth);
	const { currentUser } = user;
    const dispatch = useDispatch();
	

  return (
    <div>
        <div className='dashboard'>
				<div className='dashboard__left'>
					<Sidebar />
				</div>
				<div className='dashboard__right'>
					<div className='dashboard__rightContent'>
						<h2>Settings coming soon!</h2>
						<h3>Upcoming Themes</h3>
						<div className='themeButtons'>
							{ThemeColors.map((color, index) => (
							<button key={index} className='button' style={{ backgroundColor: color }}>
								Theme {index + 1}
							</button>
							))}
						</div>

																							
					</div>
				</div>
			</div>
    </div>
  )
};

export default Settings;