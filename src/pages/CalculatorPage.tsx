import type {Product,Settings} from '../domain/models';
export function CalculatorPage({products,onStart}:{products:Product[];settings:Settings;onStart:()=>void}){return <div className="empty"><h2>Быстрый расчёт</h2><p>{products.length?'Добавьте ингредиенты и увидите себестоимость.':'Сначала добавьте продукты.'}</p><button className="primary" onClick={onStart}>Начать расчёт</button></div>}
