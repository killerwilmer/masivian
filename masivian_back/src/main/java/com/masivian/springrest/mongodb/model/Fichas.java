package com.masivian.springrest.mongodb.model;

import org.joda.time.DateTime;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "fichas")
public class Fichas {
	@Id
	private String id;

	@Indexed(unique=true, sparse=true)
	private String nombre;

	private String cuerpo;

	private Area area;

	private Canal canal;

	@CreatedDate
	private DateTime fechaCreacion;

	@LastModifiedDate
	private DateTime fechaModificacion;

	public Fichas() {
	}

	public Fichas(String nombre, String cuerpo, Area area, Canal canal) {
		this.nombre = nombre;
		this.cuerpo = cuerpo;
		this.area = area;
		this.canal = canal;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getCuerpo() {
		return cuerpo;
	}

	public void setCuerpo(String cuerpo) {
		this.cuerpo = cuerpo;
	}

	public Area getArea() {
		return area;
	}

	public void setArea(Area area) {
		this.area = area;
	}

	public Canal getCanal() {
		return canal;
	}

	public void setCanal(Canal canal) {
		this.canal = canal;
	}
}
