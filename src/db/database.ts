import Dexie,{type Table} from 'dexie';
import type {Product,Recipe,Settings} from '../domain/models';
export class FoodDatabase extends Dexie {products!:Table<Product,string>;recipes!:Table<Recipe,string>;settings!:Table<Settings,string>;drafts!:Table<{id:string;value:Recipe},string>;constructor(name='foodcost'){super(name);this.version(1).stores({products:'id,name,category,isArchived,updatedAt',recipes:'id,name,category,isArchived,updatedAt',settings:'id',drafts:'id'});}}
export const db=new FoodDatabase();
