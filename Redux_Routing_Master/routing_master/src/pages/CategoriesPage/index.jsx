import React, {useEffect, useState} from 'react'
import CategoryCard from '../../components/CategoryCard';
import { getCategories } from '../../requestes/categories'
import s from './index.module.css'

export default function CategoriesPage() {

    const [ categories, setCategories ] = useState([]);

    useEffect(() => {
        getCategories(setCategories)
    }, []);
    

  return (
    
    categories.length === 0
     ? <p>Categories are louding...</p>
     : <div className={s.categories_page}>
        {
            categories.map(el => <CategoryCard key={el} category={el} />)
        }
    </div>
  )
}
