import { useState } from 'react';
import { Li } from './style';

// eslint-disable-next-line react/prop-types
export const WordFinished = ({el}) => {

	const [remember, setRemember] = useState(false);

	return(
		<Li remember={remember} onClick={() => setRemember(!remember)}>
			{el}
		</Li>
	);
};