import { useDispatch, useSelector } from 'react-redux';
import { search } from '../../redux/filter/actions';
import { getFilterValue } from '../../redux/filter/selectors';
import { nanoid } from 'nanoid';
import { LabelTitle } from './Filter.styled';

const Filter = () => {
  const value = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const filterInputId = nanoid();

  const handleChange = evt => {
    const filterValue = evt.target.value;

    dispatch(search(filterValue));
  };

  return (
    <label htmlFor={filterInputId}>
      <LabelTitle>Find contacts by name:</LabelTitle>
      <input
        type="text"
        name="filter"
        id={filterInputId}
        value={value}
        placeholder="Search..."
        onChange={handleChange}
      />
    </label>
  );
};

export default Filter;
