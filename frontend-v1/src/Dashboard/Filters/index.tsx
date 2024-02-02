import useFilters from '../../store/useFilters';
import Accordion from './Accordion';

export function Filters() {

  const categories = useFilters((state: any) => state.categories);
  const cssFrameworks = useFilters((state: any) => state.cssFrameworks);
  const componentLibraries = useFilters((state: any) => state.componentLibraries)

  return (
    <> 
      <h2 className='text-lg p-4'>Filters</h2>
        <Accordion title='Categories' items={categories}/>
        <Accordion title='CSS Frameworks' items={cssFrameworks}/>
        <Accordion title='Component Libraries' items={componentLibraries}/>
    </>
  );
}