"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProductManager_1 = require("./ProductManager");
var productManager = new ProductManager_1.ProductManager();
productManager.add(1, 'IphoneX', 'điện thoại', 1000);
productManager.add(2, 'SamSung Galaxay S7', 'điện thoại', 2000);
productManager.add(3, 'VinsmartPRo', 'điện thoại', 3000);
productManager.add(4, 'SamsungGalaxy', 'điện thoại', 40000);
console.log('Danh sách sản phẩm:');
console.table(productManager.showList());
console.table(productManager.search('VinsmartPRo'));
productManager.delete(1);
console.table(productManager.showList());
