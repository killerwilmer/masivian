package com.masivian.springrest.mongodb.controller;

import com.masivian.springrest.mongodb.model.Fichas;
import com.masivian.springrest.mongodb.repo.FichasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class FichasController {

    @Autowired
    FichasRepository repository;

    @GetMapping("/fichas")
    public List<Fichas> getAllFichas() {
        System.out.println("Get all Fichas...");

        List<Fichas> fichas = new ArrayList<>();
        repository.findAll().forEach(fichas::add);

        return fichas;
    }

    @PostMapping("/fichas/create")
    public Fichas postFicha(@RequestBody Fichas pFichas) {

        Fichas fichas = repository.save(new Fichas(pFichas.getNombre(), pFichas.getCuerpo(), pFichas.getArea(), pFichas.getCanal()));
        return fichas;
    }

    @DeleteMapping("/fichas/{id}")
    public ResponseEntity<String> deleteFicha(@PathVariable("id") String id) {
        System.out.println("Delete Ficha with ID = " + id + "...");

        repository.deleteById(id);

        return new ResponseEntity<>("Ficha has been deleted!", HttpStatus.OK);
    }

    @DeleteMapping("/fichas/delete")
    public ResponseEntity<String> deleteAllFichas() {
        System.out.println("Delete All Fichas...");

        repository.deleteAll();

        return new ResponseEntity<>("All fichas have been deleted!", HttpStatus.OK);
    }

    @PutMapping("/fichas/{id}")
    public ResponseEntity<Fichas> updateFichas(@PathVariable("id") String id, @RequestBody Fichas fichas) {
        System.out.println("Update Fichas with ID = " + id + "...");

        Optional<Fichas> fichasData = repository.findById(id);

        if (fichasData.isPresent()) {
            Fichas _fichas = fichasData.get();
            _fichas.setNombre(fichas.getNombre());
            _fichas.setCuerpo(fichas.getCuerpo());
            _fichas.setArea(fichas.getArea());
            _fichas.setCanal(fichas.getCanal());
            return new ResponseEntity<>(repository.save(_fichas), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
