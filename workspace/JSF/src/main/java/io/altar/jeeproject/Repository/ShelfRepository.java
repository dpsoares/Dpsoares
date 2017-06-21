package io.altar.jeeproject.Repository;

import io.altar.jeeproject.Model.Shelf;

public class ShelfRepository extends EntityRepository<Shelf>{
	private static final ShelfRepository INSTANCE = new ShelfRepository();
	
	public ShelfRepository(){
		
	}
	public static ShelfRepository getInstance(){
		return INSTANCE;
	}
}
