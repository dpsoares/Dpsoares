package io.altar.jseproject.model;

import io.altar.jseproject.repository.ProductRepository;

public class Product extends Entity{
	private int Prateleira;
	private double Vunitario;
	private double IVA;
	private double PVP;
	
	//getters and setters
	public int getPrateleira() {
		return Prateleira;
	}
	public void setPrateleira(int prateleira) {
		Prateleira = prateleira;
	}	
	public double getVunitario() {
		return Vunitario;
	}
	public void setVunitario(double vunitario) {
		Vunitario = vunitario;
	}
	public double getIVA() {
		return IVA;
	}
	public void setIVA(double iVA) {
		IVA = iVA;
	}
	public double getPVP() {
		return PVP;
	}
	public void setPVP(double pVP) {
		PVP = pVP;
	}
	
	public Product(int prateleira, double vunitario, double iVA, double pVP) {
		this.Prateleira = prateleira;
		this.Vunitario = vunitario;
		this.IVA = iVA;
		this.PVP = pVP;
		ProductRepository.getInstance().addElement(this);
	}
}
