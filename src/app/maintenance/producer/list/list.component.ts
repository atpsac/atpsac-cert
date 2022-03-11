import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProducerService } from '../services/producer.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  listProducer: any [] = [];

  dataSource = new MatTableDataSource(this.listProducer);


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
 
  constructor(private prodService: ProducerService) { }

  ngOnInit(): void {
    this.prodService.getAll().subscribe(resp => {
      console.log(resp);
      this.dataSource = resp;
    })
  }

}
