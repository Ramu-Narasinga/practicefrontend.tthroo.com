import useFilters from '../../store/useFilters';
import Accordion from './Accordion';

export function Filters() {

  const categories = useFilters((state: any) => state.categories);

  return (
    <>
        <Accordion title='Categories' items={categories}/>
    </>
  );
}