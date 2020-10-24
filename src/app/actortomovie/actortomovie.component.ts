import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../database.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-actortomovie',
  templateUrl: './actortomovie.component.html',
  styleUrls: ['./actortomovie.component.css']
})
export class ActortomovieComponent implements OnInit {
  moviesDB: any[] = [];
  actorsDB: any[] = [];
  updatedMovie = null;

  //selected movie and actor for section 5
  selectedActor = null;
  selectedMovie = null;
  

  constructor(private dbService: DatabaseService, private router: Router) { }

  ngOnInit(): void {
    this.onGetMovies();
    this.onGetActors();
  }

  //get movies
  onGetMovies() {
    this.dbService.getMovies().subscribe((data: any[]) => {
      this.moviesDB = data;
    });
  }

  //Get all Actors
  onGetActors() {
    this.dbService.getActors().subscribe((data: any[]) => {
      this.actorsDB = data;
    });
  }

  onAddActor(){
    this.dbService.addActorToMovie(this.selectedActor._id, this.selectedMovie._id).subscribe((data: any[]) => {
      this.onGetMovie(this.selectedMovie._id);
      this.onGetMovies();
      this.onGetActors();
    });
  }

  onGetMovie(movieId){
    this.dbService.getMovie(movieId).subscribe((data: any) => {
      // gets the actor as an object
      this.updatedMovie = data;
    });
  }

  //selecting movie and actor
  onSelectActor(item){
    this.selectedActor = item;
  }

  onSelectMovie(item){
    this.selectedMovie = item;
  }

}
