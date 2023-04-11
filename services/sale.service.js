import SaleRepository from "../repositories/sale.repository.js";
import ClientRepository from "../repositories/client.repository.js";
import ProductRepository from "../repositories/product.repository.js";
import productRepository from "../repositories/product.repository.js";
import saleRepository from "../repositories/sale.repository.js";

async function createSale(sale) {
  let error = "";
  if (!(await ClientRepository.getClient(sale.clientId))) {
    error = "Client ID não encontrado.";
  }
  const product = await ProductRepository.getProduct(sale.productId);
  if (!product) {
    error += "Product ID não encontrado.";
  }
  if (error) {
    throw new Error(error);
  }

  if (product.stock > 0) {
    sale = await SaleRepository.insertSale(sale);
    product.stock--;
    await productRepository.updateProduct(product);
    return sale;
  } else {
    throw new Error("O produto informado não possui estoque.");
  }
}

async function getSales(productId, supplierId) {
  if (productId) {
    return await saleRepository.getSalesProductId(productId);
  }
  if (supplierId) {
    return await saleRepository.getSalesSupplierId(supplierId);
  }
  return await SaleRepository.getSales();
}

async function getSale(id) {
  return await SaleRepository.getSale(id);
}

async function deleteSale(id) {
  const sale = await SaleRepository.getSale(id);
  if (sale) {
    const product = await ProductRepository.getProduct(sale.productId);
    await SaleRepository.deleteSale(id);
    product.stock++;
    await productRepository.updateProduct(product);
  } else {
    throw new Error("Venda não existe.");
  }
}

async function updateSale(sale) {
  let error = "";
  if (!(await ClientRepository.getClient(sale.clientId))) {
    error = "Client ID não encontrado.";
  }
  if (!(await ProductRepository.getProduct(sale.productId))) {
    error += "Product ID não encontrado.";
  }
  if (error) {
    throw new Error(error);
  } else {
    return await SaleRepository.updateSale(sale);
  }
}

export default {
  createSale,
  getSales,
  getSale,
  deleteSale,
  updateSale,
};
