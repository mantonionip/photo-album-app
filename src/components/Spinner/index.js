import { Center, styles } from '../../StyledComponents';
import ClipLoader from 'react-spinners/ClipLoader';

const Spinner = ({ loading }) => {
	return (
		// This div centers the spinner horizontally
		<Center>
			{/* Spinner component; shows up if "loading" is true */}
			{/* custom styles could be found in StyledComponents */}
			<ClipLoader
				loading={loading}
				css={styles.spinner}
				color={styles.spinner.color}
			/>
		</Center>
	);
};

export default Spinner;
