import { Component } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  constructor(private api:ApiService){}

  todos:any=""

  ngOnInit()
  {this.api.getTodo().subscribe((data:any)=>{this.todos=data})}

}
