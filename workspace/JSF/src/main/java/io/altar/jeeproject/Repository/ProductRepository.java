package io.altar.jeeproject.Repository;

import io.altar.jeeproject.Model.Product;

public class ProductRepository extends EntityRepository<Product>{
	private static final ProductRepository INSTANCE = new ProductRepository();
	
	public ProductRepository(){
		
	}
	public static ProductRepository getInstance(){
		return INSTANCE;
	}
}

