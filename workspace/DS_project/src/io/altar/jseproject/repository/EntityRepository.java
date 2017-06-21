package io.altar.jseproject.repository;

import java.util.LinkedHashMap;

import io.altar.jseproject.model.Entity;

public class EntityRepository<E extends Entity> {
	private int id = 0;
	private LinkedHashMap<Integer, Entity> map = new LinkedHashMap<>();
	
	//o linkedhashmap tem entrada key e entrada value. 
	//Key é o Id que é private  
	private int getNextId(){
		return ++id;
	}
	
	public void addElement(Entity entity){
		entity.setId(getNextId());
		map.put(entity.getId(), entity);
	}
	
	public void removeElement(int key){
		map.remove(key);
	}
			
}

