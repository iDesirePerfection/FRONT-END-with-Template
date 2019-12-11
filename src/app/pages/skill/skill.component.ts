import { Component, OnInit, Input } from '@angular/core';
import { SkillService } from 'app/services/candidate-services/skill.service';
import { Skill } from 'app/services/candidate-services/models/skill.model';
import { MatDialog } from '@angular/material/dialog';
import { AddSkillFormComponent } from 'app/pages/add-skill-form/add-skill-form.component';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  skills: Skill[] = [];
  sk:any={};
  @Input() isViewing: boolean;
  @Input() id:string;
  constructor(private skillService: SkillService,public dialog: MatDialog) { }

  ngOnInit() {
    this.skillService.getSkillsByCandidateId(this.id).subscribe(skills => {
      console.log(skills);
      this.skills = skills;
    });
  }

  addSkill(): void {
    const dialogRef = this.dialog.open(AddSkillFormComponent, {
      width: '400px',
      data: this.sk,
    });

    dialogRef.afterClosed().subscribe(result => {
      
    this.skillService.addSkillToCandidate(result.designation,result.rating,parseInt(this.id)).subscribe(exp=>{
      console.log(exp);
      this.skills.push(exp);
    });

    });
  }

  deleteSkill(id:number)
  {
    var i;
    for(i=0;i<this.skills.length;i++)
    {
        if(this.skills[i].id==id)
        {
          this.skills.splice(i,1);
          break;
        }
    }

    this.skillService.deleteSkill(id.toString(),this.id).subscribe();

  }

}
