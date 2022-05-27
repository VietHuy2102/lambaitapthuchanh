
import {ProductManager} from "./ProductManager";

let productManager=new ProductManager();
productManager.add(1,'IphoneX','điện thoại',1000);
productManager.add(2,'tủ lạnh','gia dụng',2000);
productManager.add(3,'Tivi','thiết bị',3000);
productManager.add(4,'Máy giặt','thiết bị gia dụng',40000);


console.log('Danh sách sản phẩm:')
console.table( productManager.showList());
console.table(productManager.search('Tivi'));
productManager.delete(1);
console.table(productManager.showList());



