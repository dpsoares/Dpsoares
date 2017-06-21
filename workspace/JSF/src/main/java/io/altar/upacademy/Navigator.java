package io.altar.upacademy;

import javax.enterprise.context.RequestScoped;
import javax.inject.Named;

@Named("navigator")
@RequestScoped
	public class Navigator {
	    private String name;
	    public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		private boolean disabled;
		public boolean isDisabled() {
			return disabled;
		}
		public void setDisabled(boolean disabled) {
			this.disabled = disabled;
		}
	}
