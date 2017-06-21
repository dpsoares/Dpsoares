package io.altar.jseproject.model;

import io.altar.jseproject.repository.ShelfRepository;

public class Shelf extends Entity{
	private int Location;
	private int Capacity;
	private int Palberga; 
	private double Priceday;
	
	public int getLocation() {
		return Location;
	}
	public void setLocation(int location) {
		Location = location;
	}
	public int getCapacity() {
		return Capacity;
	}
	public void setCapacity(int capacity) {
		Capacity = capacity;
	}
	public int getPalberga() {
		return Palberga;
	}
	public void setPalberga(int palberga) {
		this.Palberga = palberga;
	}
	public double getPriceday() {
		return Priceday;
	}
	public void setPriceday(double priceday) {
		Priceday = priceday;
	}
	//construtores (selecionei os private int shelfId etc e source generate constructors 
	public Shelf(int location, int capacity, int palberga, double priceday) {
		this.Location = location;
		this.Capacity = capacity;
		this.Palberga = palberga;
		this.Priceday = priceday;
		ShelfRepository.getInstance().addElement(this);
	}		
}
