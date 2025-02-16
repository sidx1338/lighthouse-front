import './SortByPrice.scss';
import { applyFilters, setFilters } from '../../redux/products.js';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `${value}₽`;
}

const SortByPrice = () => {
    const dispatch = useDispatch();
    const { filters } = useSelector((state) => state.products);

    // Handle filter change
    const handleFilterChange = (e) => {
        dispatch(setFilters({ [e.target.name]: e.target.value }));
        dispatch(applyFilters());
    };

    return (
        <>
            <Box sx={{ width: 300 }}>
                Цена от до:
                <Slider
                    getAriaLabel={() => 'Цена'}
                    value={filters.priceRange[1]}
                    onChange={(e) =>
                        handleFilterChange({
                            target: { name: 'priceRange', value: [0, e.target.value] },
                        })
                    }
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                />
            </Box>
        </>
    );
}

export default SortByPrice;