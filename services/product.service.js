import ProductRepository from "../repositories/product.repository.js";
import saleRepository from "../repositories/sale.repository.js";
import SupplierRepository from "../repositories/supplier.repository.js";
import ProductinfoRepository from "../repositories/productinfo.repository.js";

async function createProduct(product) {
  if (await SupplierRepository.getSupplier(product.supplierId)) {
    return await ProductRepository.insertProduct(product);
  } else {
    throw new Error("Supplier_id não existente!");
  }
}

async function getProducts() {
  return await ProductRepository.getProducts();
}

async function getProduct(id) {
  const product = await ProductRepository.getProduct(id);
  product.info = await ProductinfoRepository.getProductInfo(parseInt(id));
  return product;
}

async function deleteProduct(id) {
  const sales = await saleRepository.getSalesProductId(id);
  if (sales.length > 0) {
    throw new Error("Não é possivel excluir o produto pois ele tem vendas.");
  }
  await ProductRepository.deleteProduct(id);
}

async function updateProduct(product) {
  if (await SupplierRepository.getSupplier(product.supplierId)) {
    return await ProductRepository.updateProduct(product);
  } else {
    throw new Error("Supplier_id não existente!");
  }
}

async function createProductInfo(productInfo) {
  await ProductinfoRepository.createProductInfo(productInfo);
}

async function updateProductInfo(productInfo) {
  await ProductinfoRepository.updateProductInfo(productInfo);
}

async function createReview(review, productId) {
  await ProductinfoRepository.createReview(review, productId);
}

async function deleteReview(productId, index) {
  await ProductinfoRepository.deleteReview(parseInt(productId), index);
}

export default {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
  createProductInfo,
  updateProductInfo,
  createReview,
  deleteReview,
};
