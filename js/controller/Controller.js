import ViewBeheerder from "../view/ViewBeheerder.js";
import VierOpEenRij from "../model/VierOpEenRij.js";
import Speler from "../model/Speler.js";

export default class Controller
{
	constructor()
	{
		this.model = new VierOpEenRij();
		this.view = new ViewBeheerder(this.reageerKlikOpSpeelveld, this.reageerKlikOpStart, this.reageerKlikOpNieuwSpel, this.reageerKlikOpStoppen);
		this.speler1=new Speler(true,"kruis");
		this.speler2=new Speler(false,"rondje");
		this.view.toonStartscherm();
	}
	
	reageerKlikOpNieuwSpel = () =>
	{
		this.model.reset();
		let fiches = this.model.getFiches();
		this.view.toonFiches(fiches);
		
		if(speler1.benIkAanBeurt())
		{
			this.view.toonMededeling(speler1.getName() + " is aan de beurt");
		}
		else
		{
			this.view.toonMededeling(speler2.getName() + " is aan de beurt");
		}
		
		this.model.maakSpelActief();
		this.view.verbergNavigatie();
	}
	
	
	reageerKlikOpStoppen = () =>
	{
		
		this.view.toonStartscherm();
		this.view.resetNamen();
	}
	
	reageerKlikOpStart = (event) =>
	{
		this.model.reset();
		
		//update this.view
		const fiches = this.model.getFiches();
		this.view.toonFiches(fiches);
		
		this.speler1.resetScore();
		this.speler2.resetScore();
		
		const naam1=this.view.getNaamSpeler1();
		const naam2=this.view.getNaamSpeler2();
		
		if(naam1!==naam2 && naam1!=="" && naam2 !=="")
		{
			this.speler1.setName(naam1);
			this.speler2.setName(naam2);
		
		
		
			this.view.toonSpeelveldscherm();
			this.view.verbergNavigatie();
			this.view.toonSpelers(this.speler1,this.speler2);
			
			if(this.speler1.benIkAanBeurt())
			{
				this.view.toonMededeling(this.speler1.getName() + " is aan de beurt");
			}
			else
			{
				this.view.toonMededeling(this.speler2.getName() + " is aan de beurt");
			}
			
			this.model.maakSpelActief();
		}
		else {
			this.view.toonMededeling("vul jullie namen in!");
		}
	}
	
	reageerKlikOpSpeelveld = (event) =>
	{
		let actieveSpeler,passieveSpeler;
		if (this.model.isSpelActief())
		{
			let kolomNummer = this.view.getGeklikteKolom(event);
			
			if(this.speler1.benIkAanBeurt()===true)
			{
				actieveSpeler=this.speler1;
				passieveSpeler=this.speler2;
			}
			else
			{
				passieveSpeler=this.speler1;
				actieveSpeler=this.speler2;
			}
			
			
			let hetMag = this.model.magZet(kolomNummer,actieveSpeler.getSymbool());
			if(hetMag===true)
			{
				let winnaar= this.model.isWinnaar(actieveSpeler.getSymbool());
				if(winnaar===true)
				{	
					actieveSpeler.verhoogScore();
					this.view.toonMededeling(actieveSpeler.getName()+" heeft gewonnen!!!");
							
					ViewBeheerder.toonSpelers(speler1,speler2);
					this.view.toonNavigatie();
				}
				
				let gelijkspel=this.model.isGelijkspel();
				if(gelijkspel===true)
				{
					this.view.toonMededeling("gelijkspel!");
					this.view.toonNavigatie();
				}
				//update this.view
				let fiches = this.model.getFiches();
				this.view.toonFiches(fiches);
							
				speler1.wisselBeurt();
				speler2.wisselBeurt();
				
				if (this.model.isSpelActief())
				{
					this.view.toonMededeling(passieveSpeler.getName() + " is aan de beurt");
				}
			}
			else
			{
				this.view.toonMededeling(actieveSpeler.getName() + " ,de kolom is vol");
			}	
		}
	}
}